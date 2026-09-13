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

  const { firstName, lastName, email, country, areasOfInterest, introduction } =
    body;

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: "First name, last name, and email are required." },
      { status: 400 },
    );
  }

  try {
    await sql`
      INSERT INTO volunteer_applications (
        first_name,
        last_name,
        email,
        country,
        areas_of_interest,
        introduction
      )
      VALUES (
        ${firstName as string},
        ${lastName as string},
        ${email as string},
        ${(country as string) || null},
        ${(areasOfInterest as string[]) || []},
        ${(introduction as string) || null}
      )
    `;

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to submit application.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
