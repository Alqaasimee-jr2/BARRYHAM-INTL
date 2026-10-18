import React from "react";
import Link from "next/link";
import { Star, ExternalLink, CheckCircle2 } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { BUSINESS_INFO } from "@/lib/constants";

export function ReviewsSection({ className = "" }: { className?: string }) {
  return (
    <section
      className={`py-20 px-6 lg:px-12 bg-offwhite ${className}`}
      id="reviews"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-2">
              Client &amp; Partner Testimonials
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
              Trusted by Architects, Contractors &amp; Homeowners
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white px-4 py-2.5 rounded-full border border-navy/10 flex items-center gap-2 shadow-sm">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={15} className="fill-amber-400" />
                ))}
              </div>
              <span className="font-ui text-xs font-bold text-navy">
                5.0 / 5.0 Rating
              </span>
            </div>

            <a
              href={BUSINESS_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-ui font-semibold text-navy hover:text-gold bg-white px-4 py-2.5 rounded-full border border-navy/15 transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-2xl border border-navy/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating || 5)].map((_, idx) => (
                      <Star key={idx} size={15} className="fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-ui font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    <CheckCircle2 size={12} />
                    {t.source}
                  </span>
                </div>

                <blockquote className="font-ui text-charcoal/85 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-navy/5">
                <p className="font-ui text-xs font-bold uppercase tracking-wider text-navy">
                  {t.name}
                </p>
                <p className="font-ui text-xs text-charcoal/60 mt-0.5">
                  {t.role}
                </p>
                {t.project && (
                  <p className="font-ui text-xs text-gold font-medium mt-0.5">
                    {t.project}
                  </p>
                )}
                {t.categoryLink && (
                  <Link
                    href={t.categoryLink.href}
                    className="inline-block mt-3 px-2.5 py-1 bg-navy/5 text-navy/80 text-[10px] font-ui font-semibold uppercase tracking-wider rounded hover:bg-gold hover:text-white transition-colors"
                  >
                    {t.categoryLink.label} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
