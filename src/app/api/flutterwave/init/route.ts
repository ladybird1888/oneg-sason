import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, donationType } = await req.json();

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: "Invalid donation amount" },
        { status: 400 },
      );
    }

    const tx_ref = `OSEF-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    return NextResponse.json({
      tx_ref,
      public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
    });
  } catch (error) {
    console.error("Error initiating Flutterwave:", error);
    return NextResponse.json(
      { error: "Failed to initiate payment" },
      { status: 500 },
    );
  }
}
