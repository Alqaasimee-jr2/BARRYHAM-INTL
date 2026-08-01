export function buildWhatsAppLink(
  phoneNumber: string,
  items: { name: string; qty?: number; sku?: string }[],
  context: "product" | "service" | "general",
  overrideMessage?: string,
  role?: string,
  projectType?: string
): string {
  let message = "";

  if (overrideMessage) {
    message = overrideMessage;
  } else if (context === "general") {
    message = "Hello Barryham Int'l Ltd, I would like to make an inquiry.";
  } else if (context === "product") {
    if (items.length > 0) {
      const itemsList = items
        .map((item) => `- ${item.qty ? `${item.qty}x ` : ""}${item.name} ${item.sku ? `(SKU: ${item.sku})` : ""}`)
        .join("\n");
      message = `Hello, I am interested in getting a quote for the following products:\n\n${itemsList}`;
    } else {
      message = "Hello, I am interested in your products.";
    }
  } else if (context === "service") {
    message = `Hello, I would like to inquire about your ${
      items[0]?.name || "services"
    } service.`;
    if (projectType) {
      message += ` This is for a ${projectType} project.`;
    }
  }

  if (role && !overrideMessage) {
    message += `\n\nI am reaching out as a ${role}.`;
  }

  const encodedMessage = encodeURIComponent(message);
  const cleanPhone = phoneNumber.replace(/(?!^\+)[^\d]/g, "");

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
