import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(req: Request) {
  if (!process.env.FLW_WEBHOOK_HASH) {
    console.error(
      "FLW_WEBHOOK_HASH is not set. Set it in your Flutterwave dashboard (webhook secret hash) and as an env var.",
    );
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 500 },
    );
  }

  const hash = req.headers.get("verif-hash");
  if (hash !== process.env.FLW_WEBHOOK_HASH) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const body = await req.json();
  const data = body?.data ?? {};

  if (
    !["charge.completed", "charge.success"].includes(body?.event) ||
    data.status !== "successful"
  ) {
    return NextResponse.json({ received: true });
  }

  try {
    await sql`
      INSERT INTO donations (tx_ref, amount, donation_type, currency, email)
      VALUES (
        ${data.tx_ref},
        ${Number(data.amount)},
        ${"once"},
        ${data.currency || "NGN"},
        ${data.customer?.email || null}
      )
      ON CONFLICT (tx_ref) DO NOTHING
    `;
  } catch (error) {
    console.error("Webhook insert error:", error);
    return NextResponse.json(
      { error: "Failed to record donation" },
      { status: 500 },
    );
  }

  return NextResponse.json({ received: true });
}
