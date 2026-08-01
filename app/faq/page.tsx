import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Barryham Int'l Ltd",
  description: "Frequently asked questions about Barryham Int'l Ltd — product sourcing, delivery, installation services, and ordering in Nigeria.",
};

const faqs = [
  {
    question: "What products does Barryham Int'l Ltd supply?",
    answer: "We supply a curated range of premium building materials including sanitary wares and fittings (WCs, basins, bathtubs, shower enclosures), electrical cables and lighting accessories, and plumbing pipes and fittings. All products are sourced directly from certified manufacturers and European-grade suppliers."
  },
  {
    question: "Do you offer installation services?",
    answer: "Yes. Beyond supply, Barryham Int'l Ltd provides professional installation services for all product categories we stock. Our trained technicians handle sanitary ware installation, electrical fitting, and plumbing setup for both residential and commercial projects."
  },
  {
    question: "How do I place an order?",
    answer: "The easiest way is to add items to your Quote Request on our website and send the list directly to our team via WhatsApp. You can also call us directly on +234 803 475 0270, +234 808 444 6319, or +234 909 038 1508, or email us at bihl.sales@gmail.com."
  },
  {
    question: "Do you deliver nationwide?",
    answer: "Yes, we deliver across Nigeria. We have two showrooms in Lagos (Agege and Igando/Alimosho), but we ship products to clients in Abuja, Port Harcourt, Ibadan, and other states. Delivery timelines and logistics costs are confirmed at the time of order."
  },
  {
    question: "Are your products genuine and certified?",
    answer: "Absolutely. We are direct representatives of the manufacturers and brands we stock. All products come with manufacturer warranties and certification. We do not deal in counterfeit or substandard goods — this is a cornerstone of our business."
  },
  {
    question: "Can I get a bulk or institutional discount?",
    answer: "Yes. We regularly supply large-scale institutional, government, and commercial projects. For bulk orders, reach out to us directly via WhatsApp or email to discuss pricing, lead times, and payment terms tailored to your project needs."
  },
  {
    question: "Where are your showrooms located?",
    answer: "We have two locations: (1) Block B, Suite 3, Association Plaza, Cement Bus Stop, Lagos-Abeokuta Express Way, Dopemu, Agege, Lagos. (2) Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, Along LASU-Isheri/Igando Road, Alimosho, Lagos."
  },
  {
    question: "How long has Barryham Int'l Ltd been in business?",
    answer: "Barryham International Limited was established in 2018. In over 7 years of operation, we have successfully completed 30+ projects across government, hospital, residential, and corporate sectors in Nigeria."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="py-16 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-ui text-lg text-offwhite/90">
            Everything you need to know about our products, services, and how to work with us.
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
        <div className="mt-20 text-center bg-navy text-white rounded-3xl p-12">
          <h2 className="font-heading font-bold text-3xl mb-4">Still have a question?</h2>
          <p className="font-ui text-offwhite/80 mb-8 max-w-md mx-auto">
            Our team is available Monday–Saturday, 8am–6pm. Reach us directly on WhatsApp for the fastest response.
          </p>
          <a
            href="https://wa.me/2348034750270?text=Hello%20Barryham%2C%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-ui font-semibold py-4 px-8 rounded-full transition-colors shadow-md"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
