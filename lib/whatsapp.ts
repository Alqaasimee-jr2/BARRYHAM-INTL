export function buildWhatsAppLink(
  phoneNumber: string,
  items: { name: string; qty?: number }[],
  context: "product" | "service" | "general",
  role?: string,
  projectType?: string
): string {
  let message = "";

  if (context === "general") {
    message = "Hello Barryham Int'l Ltd, I would like to make an inquiry.";
  } else if (context === "product") {
    if (items.length > 0) {
      const itemsList = items
        .map((item) => `- ${item.qty ? `${item.qty}x ` : ""}${item.name}`)
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

  if (role) {
    message += `\n\nI am reaching out as a ${role}.`;
  }

  const encodedMessage = encodeURIComponent(message);
  // Remove any non-numeric characters from the phone number except the leading +
  const cleanPhone = phoneNumber.replace(/(?!^\+)[^\d]/g, "");

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
