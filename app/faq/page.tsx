import type { Metadata } from "next";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";

export const metadata: Metadata = {
  title: "FAQs on Sanitary Ware, Plumbing & Electrical Supply | Barryham Int'l Ltd",
  description:
    "Frequently asked questions about Barryham Int'l Ltd — genuine sanitary ware, electrical cables, plumbing fittings, Lagos showrooms, nationwide delivery, and installation.",
  alternates: {
    canonical: "https://barryham.site/faq",
  },
};

const faqs = [
  {
    question: "What products does Barryham Int'l Ltd supply?",
    answer:
      "We supply a curated range of premium building materials including sanitary wares and bathroom fittings (WCs, basins, bathtubs, shower enclosures, mixers), SON-certified electrical cables and lighting accessories, plumbing pipes and valves, and Ariston water heaters. All products are sourced directly from certified manufacturers and European-grade suppliers.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes. Beyond supply, Barryham Int'l Ltd provides professional installation services across all product categories we stock. Our trained technicians handle sanitary ware installation, electrical fitting, water heater mounting, and plumbing setup for both residential and commercial projects.",
  },
  {
    question: "How do I place an order or request a quote?",
    answer:
      "You can use our Request a Quote page, add items to your Quote Cart on our website, or click any 'Chat on WhatsApp' button to send your list directly to our sales desk on +234 803 475 0270. You can also call +234 803 475 0270, +234 808 444 6319, or +234 909 038 1508.",
  },
  {
    question: "Do you deliver across Lagos and nationwide?",
    answer:
      "Yes, we deliver across Lagos within 24–48 hours and dispatch nationwide to Abuja, Port Harcourt, Ibadan, Enugu, Kano, and all 36 states. You can also inspect and pick up orders from our Dopemu/Agege or Igando/Alimosho showrooms.",
  },
  {
    question: "Are your products genuine and certified?",
    answer:
      "Absolutely. We are direct representatives and authorised suppliers of the brands we stock (Roca, Ideal Standard, Armitage Shanks, Kale, Coleman, Nigerchin, Cutix, Ariston). All products come with manufacturer warranties and certification.",
  },
  {
    question: "Can I get a bulk or contractor trade discount?",
    answer:
      "Yes. We regularly supply large-scale residential estates, hotels, hospitals, government buildings, and commercial projects. Reach out via WhatsApp or our Request a Quote page with your Bill of Quantities (BOQ) for trade and volume pricing.",
  },
  {
    question: "Where are your Lagos showrooms located and what are your opening hours?",
    answer:
      "We have two Lagos showrooms open Monday to Saturday, 8:00 AM – 6:00 PM: (1) Dopemu/Agege Showroom: Block B, Suite 3, Association Plaza, Cement Bus Stop, Lagos-Abeokuta Express Way, Dopemu, Agege, Lagos. (2) Alimosho/Igando Showroom: Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, Along LASU-Isheri/Igando Road, Alimosho, Lagos.",
  },
  {
    question: "How long has Barryham Int'l Ltd been in business?",
    answer:
      "Barryham International Limited was established in 2018 (RC 1521985). In over 7 years of operation, we have completed 30+ major projects across government, hospital, military, residential, and corporate sectors in Nigeria.",
  },
];

export default function FAQPage() {
  const faqJsonLd = getFAQSchema(faqs);
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQs", url: "/faq" },
  ]);

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <section className="py-16 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-ui text-lg text-offwhite/90">
            Everything you need to know about our genuine building materials, Lagos showrooms, nationwide delivery, and ordering on WhatsApp.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pt-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl border border-navy/5 shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none p-6 md:p-8 font-heading font-semibold text-lg text-navy hover:text-gold transition-colors gap-6">
                <span>{faq.question}</span>
                <span className="shrink-0 text-gold text-2xl font-light transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-navy/5">
                <p className="font-ui text-charcoal/80 leading-relaxed mt-4">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16">
          <SectionWhatsAppCTA
            title="Still have a question?"
            subtitle="Our team is available Monday–Saturday, 8:00 AM – 6:00 PM. Reach us directly on WhatsApp for the fastest response."
            whatsappMessage="Hello Barryham, I have a question about your products and services."
            contextLabel="faq_page_cta"
          />
        </div>
      </section>
    </main>
  );
}
