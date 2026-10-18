"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { trackConversion } from "@/lib/analytics";

export function AnalyticsProvider() {
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";

      if (href.includes("wa.me/") || href.includes("whatsapp.com")) {
        trackConversion("whatsapp_click", {
          href,
          label: (anchor.textContent || "WhatsApp CTA").trim().slice(0, 80),
        });
      } else if (href.startsWith("tel:")) {
        trackConversion("call_click", {
          phone: href.replace("tel:", ""),
          label: (anchor.textContent || "Phone Call").trim().slice(0, 80),
        });
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <>
      {/* Vercel Built-In Web Analytics script */}
      <Script
        id="vercel-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`,
        }}
      />
      <Script
        src="/_vercel/insights/script.js"
        strategy="afterInteractive"
        defer
      />
    </>
  );
}
