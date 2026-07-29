import { createFileRoute } from "@tanstack/react-router";

const PIXEL_ID = "888436793890475";
const GRAPH_VERSION = "v19.0";

interface DownloadPayload {
  eventId?: string;
  eventSourceUrl?: string;
  userAgent?: string;
}

export const Route = createFileRoute("/api/public/fb-download")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const token = process.env.FB_CAPI_ACCESS_TOKEN;
        if (!token) {
          return Response.json(
            { ok: false, error: "FB_CAPI_ACCESS_TOKEN missing" },
            { status: 500 },
          );
        }

        let body: DownloadPayload = {};
        try {
          body = (await request.json()) as DownloadPayload;
        } catch {
          body = {};
        }

        const eventId =
          body.eventId && typeof body.eventId === "string"
            ? body.eventId
            : crypto.randomUUID();
        const eventSourceUrl =
          typeof body.eventSourceUrl === "string" ? body.eventSourceUrl : "";
        const userAgent =
          (typeof body.userAgent === "string" && body.userAgent) ||
          request.headers.get("user-agent") ||
          "";

        const ip =
          request.headers.get("cf-connecting-ip") ||
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          request.headers.get("x-real-ip") ||
          "";

        const payload = {
          data: [
            {
              event_name: "Download",
              event_time: Math.floor(Date.now() / 1000),
              event_id: eventId,
              event_source_url: eventSourceUrl,
              action_source: "website",
              user_data: {
                client_ip_address: ip,
                client_user_agent: userAgent,
              },
              custom_data: {
                content_name: "NETPLAYA APK",
              },
            },
          ],
        };

        let fbStatus = 0;
        let fbText = "";
        try {
          const res = await fetch(
            `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            },
          );
          fbStatus = res.status;
          fbText = await res.text();
        } catch (err) {
          return Response.json(
            { ok: false, error: (err as Error).message, eventId },
            { status: 200 },
          );
        }

        // Always return 200 to the browser so the keepalive beacon shows as
        // successful and never blocks the user's download navigation.
        return Response.json(
          { ok: fbStatus >= 200 && fbStatus < 300, fbStatus, fb: fbText, eventId },
          { status: 200 },
        );
      },
    },
  },
});
