import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email tidak valid" },
        { status: 400 }
      );
    }

    // TODO: Connect to Mailchimp/ConvertKit
    // For now, just log and return success
    console.log("New subscriber:", email);

    return NextResponse.json({ success: true, message: "Berhasil terdaftar" });
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan" },
      { status: 500 }
    );
  }
}
