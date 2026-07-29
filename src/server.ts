import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

// Long-lived cache for hashed build assets and CDN-pointed Lovable assets.
function addCacheHeaders(request: Request, response: Response): Response {
  const url = new URL(request.url);
  const p = url.pathname;
  const isHashedAsset =
    p.startsWith("/_build/") ||
    p.startsWith("/assets/") ||
    p.startsWith("/__l5e/assets-v1/") ||
    /\.(?:js|mjs|css|woff2?|ttf|otf|webp|avif|png|jpg|jpeg|gif|svg|ico)$/i.test(p);
  if (isHashedAsset) {
    if (response.headers.has("cache-control")) return response;
    const headers = new Headers(response.headers);
    headers.set("cache-control", "public, max-age=31536000, immutable");
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  }

  // Edge-cache SSR HTML so repeat visits skip the 1-2s cold render.
  // Browser revalidates every load; Cloudflare serves from edge for 5min,
  // and keeps serving stale HTML for 24h while it refreshes in the background.
  if (
    request.method === "GET" &&
    response.status === 200 &&
    !response.headers.has("cache-control") &&
    !p.startsWith("/api/") &&
    !p.startsWith("/_serverFn/") &&
    !p.startsWith("/admin")
  ) {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("text/html")) {
      const headers = new Headers(response.headers);
      headers.set(
        "cache-control",
        "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      );
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }
  }

  return response;
}


export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return addCacheHeaders(request, await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
