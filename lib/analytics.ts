export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, params);
}