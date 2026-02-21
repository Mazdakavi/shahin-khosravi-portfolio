/**
 * Lightweight analytics helper.
 * Replace with real Plausible / GA4 calls once keys are configured.
 */

type EventName =
  | "whatsapp_click"
  | "book_call_click"
  | "form_submit"
  | "cv_download"
  | "project_view"
  | "email_click";

export function trackEvent(name: EventName, props?: Record<string, string>) {
  // Plausible
  // if (typeof window !== "undefined" && (window as any).plausible) {
  //   (window as any).plausible(name, { props });
  // }

  // GA4
  // if (typeof window !== "undefined" && (window as any).gtag) {
  //   (window as any).gtag("event", name, props);
  // }

  if (process.env.NODE_ENV === "development") {
    console.log(`[analytics] ${name}`, props ?? "");
  }
}

export const WHATSAPP_URL =
  "https://wa.me/971501138078?text=" +
  encodeURIComponent(
    "Hi Shahin, I'm interested in villa interior fit-out + site supervision in Dubai. My location is __ and timeline is __."
  );
