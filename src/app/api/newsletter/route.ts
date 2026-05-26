import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

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

  if (!email) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 },
    );
  }

  const { error } = await supabaseAdmin.from("newsletter_subscribers").insert({
    email: email.toLowerCase(),
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "This email is already subscribed." },
        { status: 409 },
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
