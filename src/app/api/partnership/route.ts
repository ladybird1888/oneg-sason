import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { organizationName, organizationType, contactName, jobTitle, email, areaOfInterest, message } = body;

  if (!organizationName || !organizationType || !contactName || !email || !message) {
    return NextResponse.json(
      { error: "Organization name, organization type, contact name, email, and message are required." },
      { status: 400 },
    );
  }

  const { error } = await supabaseAdmin.from("partnership_inquiries").insert({
    organization_name: organizationName,
    organization_type: organizationType,
    contact_name: contactName,
    job_title: jobTitle || null,
    email,
    area_of_interest: areaOfInterest || null,
    message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
