import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(req: NextRequest) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { email } = body;

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 },
    );
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    await sql`
      INSERT INTO users (email, source)
      VALUES (${normalizedEmail}, 'newsletter')
    `;

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const code =
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      typeof (error as { code: unknown }).code === "string"
        ? (error as { code: string }).code
        : null;

    if (code === "23505") {
      return NextResponse.json(
        { error: "This email is already subscribed." },
        { status: 409 },
      );
    }

    const message =
      error instanceof Error ? error.message : "Failed to subscribe.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
