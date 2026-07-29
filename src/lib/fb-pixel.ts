// Client-side helpers for the Meta (Facebook) Pixel + Conversions API bridge.
// Used to guarantee the `Download` event is reported even when:
//  - the navigation away from the page interrupts the browser pixel beacon
//  - an ad blocker prevents fbevents.js from loading
//
// Browser pixel + server CAPI share the same `eventID` so Meta deduplicates.

export const FB_PIXEL_ID = "1051934957414454";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/**
 * Fire the browser pixel + server CAPI for a `Download` event, then
 * navigate to the APK url after a short delay so both beacons have time
 * to leave the page. Never call `Tracking.trackDownload()` and navigate
 * yourself — always go through this helper.
 */
export function triggerDownload(url: string): void {
  if (typeof window === "undefined") return;
  if (!url || url === "#") return;

  const eventId = uuid();
  const eventSourceUrl = window.location.href;
  const userAgent = navigator.userAgent;

  // 1) Browser pixel (with eventID so CAPI dedupes)
  try {
    window.fbq?.("track", "Download", { content_name: "NETPLAYA APK" }, { eventID: eventId });
  } catch {
    /* ignore */
  }

  // 2) Server-side Conversions API (keepalive so it survives navigation)
  try {
    void fetch("/api/public/fb-download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({ eventId, eventSourceUrl, userAgent }),
    }).catch(() => {});
  } catch {
    /* ignore */
  }

  // 3) Delayed navigation so the pixel + CAPI beacons fire first.
  //    Most browsers send keepalive within ~300ms, so 350ms is a safe floor.
  window.setTimeout(() => {
    window.location.href = url;
  }, 350);
}
