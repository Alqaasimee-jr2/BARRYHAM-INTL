"use client";

export type ConversionEventName =
  | "whatsapp_click"
  | "quote_submitted"
  | "call_click"
  | "product_enquiry";

declare global {
  interface Window {
    va?: (
      event: "beforeSend" | "event" | "pageview",
      properties?: unknown
    ) => void;
    vaq?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackConversion(
  eventName: ConversionEventName,
  properties: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined") return;

  const cleanProps: Record<string, string | number | boolean> = {
    page: window.location.pathname,
  };

  Object.entries(properties).forEach(([key, value]) => {
    if (value !== undefined) {
      cleanProps[key] = value;
    }
  });

  // 1. Vercel Built-In Analytics (window.va)
  if (typeof window.va === "function") {
    window.va("event", { name: eventName, data: cleanProps });
  } else {
    window.vaq = window.vaq || [];
    window.vaq.push(["event", { name: eventName, data: cleanProps }]);
  }

  // 2. Optional GA4 / GTM compatibility if ever connected
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, cleanProps);
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...cleanProps });
  }
}
