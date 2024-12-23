export interface PaymentService {
  processPayment(amount: number, method: string): Promise<boolean>;
}
