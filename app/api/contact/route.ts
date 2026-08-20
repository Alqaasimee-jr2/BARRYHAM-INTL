import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message, productQuote } = body;

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: "Name and contact info (phone or email) are required." },
        { status: 400 }
      );
    }

    // Process inquiry logging / storage / notification dispatch
    console.log("New Inquiry Received:", { name, phone, email, message, productQuote });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your inquiry has been received. Our sales team will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error handling contact inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try reaching out via WhatsApp or phone." },
      { status: 500 }
    );
  }
}
