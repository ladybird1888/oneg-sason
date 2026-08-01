import { NextResponse } from "next/server";
import { flw } from "@/lib/flutterwave";
import { supabaseAdmin } from "@/lib/supabase-admin";

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

    const response = await flw.Transaction.verify({ id: transaction_id });

    if (response.data.status === "successful") {
      const verifiedAmount = Number(response.data.amount);
      const verifiedCurrency = response.data.currency;

      if (amount && Number(amount) !== verifiedAmount) {
        console.warn(
          `Donation amount mismatch: client claimed ${amount} ${currency}, Flutterwave verified ${verifiedAmount} ${verifiedCurrency}`,
        );
      }

      const { error } = await supabaseAdmin.from("donations").upsert(
        {
          tx_ref: tx_ref || response.data.tx_ref,
          amount: verifiedAmount || amount || response.data.amount,
          donation_type: donationType || "once",
          currency: verifiedCurrency || currency || "NGN",
          email: email || response.data.customer?.email || null,
        },
        { onConflict: "tx_ref" },
      );

      if (error) {
        console.error("Supabase insert error:", error);
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
