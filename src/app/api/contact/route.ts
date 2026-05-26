import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { firstName, lastName, email, subject, message } = body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  const { error: dbError } = await supabaseAdmin.from("contact_messages").insert({
    first_name: firstName,
    last_name: lastName,
    email,
    subject,
    message,
  });

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.CONTACT_FORM_TO_EMAIL!;

    await resend.emails.send({
      from: `Oneg Sason Empowerment Foundation Contact Form <contactus@resend.dev>`,
      to: toEmail,
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });
  } catch {
    // Email is secondary — data is already saved
  }

  return NextResponse.json({ success: true });
}
