import Flutterwave from "flutterwave-node-v3";

let flw: any;

export function getFlw() {
  if (!flw) {
    flw = new Flutterwave(
      process.env.NEXT_PUBLIC_FLW_KEY!,
      process.env.FLW_SECRET_KEY!,
    );
  }
  return flw;
}
