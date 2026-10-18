import React from "react";
import { ShieldCheck, Truck, Wrench, Building2 } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

const ICONS = [ShieldCheck, Truck, Wrench, Building2];

interface TrustBadgesProps {
  variant?: "light" | "dark";
  compact?: boolean;
  className?: string;
}

export function TrustBadges({
  variant = "light",
  compact = false,
  className = "",
}: TrustBadgesProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 ${className}`}
    >
      {TRUST_BADGES.map((badge, index) => {
        const Icon = ICONS[index % ICONS.length];
        return (
          <div
            key={badge.label}
            className={`flex items-start gap-3 rounded-xl p-3.5 border transition-colors ${
              isDark
                ? "bg-white/5 border-white/10 text-white"
                : "bg-white border-navy/10 text-navy shadow-sm"
            }`}
          >
            <div
              className={`p-2 rounded-lg shrink-0 ${
                isDark ? "bg-gold/20 text-gold" : "bg-gold/10 text-gold"
              }`}
            >
              <Icon size={18} />
            </div>
            <div>
              <p
                className={`font-ui font-semibold text-xs md:text-sm leading-snug ${
                  isDark ? "text-white" : "text-navy"
                }`}
              >
                {badge.label}
              </p>
              {!compact && (
                <p
                  className={`font-ui text-[11px] leading-relaxed mt-0.5 ${
                    isDark ? "text-offwhite/70" : "text-charcoal/70"
                  }`}
                >
                  {badge.detail}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
