import Flutterwave from "flutterwave-node-v3";

export const flw = new Flutterwave(
  process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
  process.env.FLW_SECRET_KEY!,
);
