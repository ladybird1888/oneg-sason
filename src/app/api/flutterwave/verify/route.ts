import { NextResponse } from "next/server";
import { getFlw } from "@/lib/flutterwave";
import { sql } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { transaction_id, amount, donationType, currency, email, tx_ref } =
      await req.json();

    if (!transaction_id) {
      return NextResponse.json(
        { error: "Missing transaction_id" },
        { status: 400 },
      );
    }

    const response = await getFlw().Transaction.verify({ id: transaction_id });

    if (response.data.status === "successful") {
      const verifiedAmount = Number(response.data.amount);
      const verifiedCurrency = response.data.currency;

      if (amount && Number(amount) !== verifiedAmount) {
        console.warn(
          `Donation amount mismatch: client claimed ${amount} ${currency}, Flutterwave verified ${verifiedAmount} ${verifiedCurrency}`,
        );
      }

      const donationTxRef = tx_ref || response.data.tx_ref;
      const donationAmount = verifiedAmount || amount || response.data.amount;
      const donationTypeValue = donationType || "once";
      const donationCurrency = verifiedCurrency || currency || "NGN";
      const donationEmail =
        email || response.data.customer?.email || null;

      try {
        await sql`
          INSERT INTO donations (tx_ref, amount, donation_type, currency, email)
          VALUES (
            ${donationTxRef},
            ${donationAmount},
            ${donationTypeValue},
            ${donationCurrency},
            ${donationEmail}
          )
          ON CONFLICT (tx_ref) DO UPDATE SET
            amount = EXCLUDED.amount,
            donation_type = EXCLUDED.donation_type,
            currency = EXCLUDED.currency,
            email = COALESCE(EXCLUDED.email, donations.email)
        `;
      } catch (error) {
        console.error("Neon insert error:", error);
        return NextResponse.json(
          { error: "Failed to record donation" },
          { status: 500 },
        );
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Transaction not successful" },
      { status: 400 },
    );
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 },
    );
  }
}
