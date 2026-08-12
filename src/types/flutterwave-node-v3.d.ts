declare module "flutterwave-node-v3" {
  interface FlutterwaveResponse {
    status: string;
    message: string;
    data: {
      id: number;
      tx_ref: string;
      amount: number;
      currency: string;
      status: string;
      customer?: {
        email: string;
        name: string;
      };
      [key: string]: unknown;
    };
  }

  interface TransactionService {
    verify(data: { id: number }): Promise<FlutterwaveResponse>;
    verify_by_tx(data: { tx_ref: string }): Promise<FlutterwaveResponse>;
    fetch(data: Record<string, unknown>): Promise<FlutterwaveResponse>;
    fee(data: Record<string, unknown>): Promise<FlutterwaveResponse>;
    refund(data: Record<string, unknown>): Promise<FlutterwaveResponse>;
    event(data: Record<string, unknown>): Promise<FlutterwaveResponse>;
    resend_hooks(data: Record<string, unknown>): Promise<FlutterwaveResponse>;
  }

  class Flutterwave {
    Transaction: TransactionService;
    constructor(public_key: string, public_secret: string, base_url_or_production_flag?: string | boolean);
  }

  export default Flutterwave;
}
