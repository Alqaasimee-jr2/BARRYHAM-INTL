import { BUSINESS_INFO, STICKY_WHATSAPP_LINK } from "./constants";

export { STICKY_WHATSAPP_LINK };

export function buildWhatsAppLink(
  phoneNumber: string = BUSINESS_INFO.whatsappNumber,
  items: { name: string; qty?: number; sku?: string }[] = [],
  context: "product" | "service" | "general" | "quote" = "general",
  overrideMessage?: string,
  role?: string,
  projectType?: string
): string {
  let message = "";

  if (overrideMessage) {
    message = overrideMessage;
  } else if (context === "general") {
    message = "Hello Barryham, I need a quote for...";
  } else if (context === "product") {
    if (items.length > 0) {
      const itemsList = items
        .map(
          (item) =>
            `- ${item.qty ? `${item.qty}x ` : ""}${item.name}${
              item.sku ? ` (SKU: ${item.sku})` : ""
            }`
        )
        .join("\n");
      message = `Hello Barryham, I need a quote for the following products:\n\n${itemsList}`;
    } else {
      message = "Hello Barryham, I need a quote for...";
    }
  } else if (context === "service") {
    message = `Hello Barryham, I need a quote for your ${
      items[0]?.name || "supply & installation"
    } service.`;
    if (projectType) {
      message += ` This is for a ${projectType} project.`;
    }
  } else if (context === "quote") {
    message = "Hello Barryham, I need a quote for...";
  }

  if (role && !overrideMessage) {
    message += `\n\nI am reaching out as a ${role}.`;
  }

  const encodedMessage = encodeURIComponent(message);
  const cleanPhone = (phoneNumber || BUSINESS_INFO.whatsappNumber).replace(
    /[^\d]/g,
    ""
  );

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export interface QuoteSubmissionPayload {
  fullName: string;
  phone: string;
  projectType: string;
  productsNeeded: string;
  location: string;
  budgetRange?: string;
  message?: string;
  attachmentName?: string;
}

export function buildQuoteSubmissionWhatsAppLink(
  payload: QuoteSubmissionPayload
): string {
  const lines = [
    "Hello Barryham, I need a quote for my project:",
    "",
    `*Name:* ${payload.fullName}`,
    `*Phone/WhatsApp:* ${payload.phone}`,
    `*Project Type:* ${payload.projectType}`,
    `*Location:* ${payload.location}`,
    `*Products Needed:* ${payload.productsNeeded}`,
  ];

  if (payload.budgetRange) {
    lines.push(`*Budget Range:* ${payload.budgetRange}`);
  }
  if (payload.attachmentName) {
    lines.push(`*Attached Specification/BOQ File:* ${payload.attachmentName} (I will share the file here in chat)`);
  }
  if (payload.message) {
    lines.push(`*Additional Notes:* ${payload.message}`);
  }

  return buildWhatsAppLink(
    BUSINESS_INFO.whatsappNumber,
    [],
    "quote",
    lines.join("\n")
  );
}

export function buildContactSubmissionWhatsAppLink(payload: {
  name: string;
  phone: string;
  email?: string;
  message: string;
}): string {
  const lines = [
    "Hello Barryham, I am reaching out via your website Contact page:",
    "",
    `*Name:* ${payload.name}`,
    `*Phone:* ${payload.phone}`,
    ...(payload.email ? [`*Email:* ${payload.email}`] : []),
    "",
    `*Message:*`,
    payload.message,
  ];

  return buildWhatsAppLink(
    BUSINESS_INFO.whatsappNumber,
    [],
    "general",
    lines.join("\n")
  );
}
