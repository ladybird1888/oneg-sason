import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

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

  const {
    organizationName,
    organizationType,
    contactName,
    jobTitle,
    email,
    areaOfInterest,
    message,
  } = body;

  if (
    !organizationName ||
    !organizationType ||
    !contactName ||
    !email ||
    !message
  ) {
    return NextResponse.json(
      {
        error:
          "Organization name, organization type, contact name, email, and message are required.",
      },
      { status: 400 },
    );
  }

  try {
    await sql`
      INSERT INTO partnership_inquiries (
        organization_name,
        organization_type,
        contact_name,
        job_title,
        email,
        area_of_interest,
        message
      )
      VALUES (
        ${organizationName as string},
        ${organizationType as string},
        ${contactName as string},
        ${(jobTitle as string) || null},
        ${email as string},
        ${(areaOfInterest as string) || null},
        ${message as string}
      )
    `;

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errMessage =
      error instanceof Error ? error.message : "Failed to submit inquiry.";
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
