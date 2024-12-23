import { PaymentService } from '../../services/payment/ports/payment-service';
import { OrderRepository } from '../../repositories/order-repository';

export class CreatePaymentUseCaseImpl {
  private paymentService: PaymentService;
  private orderRepository: OrderRepository;

  constructor(paymentService: PaymentService, orderRepository: OrderRepository) {
    this.paymentService = paymentService;
    this.orderRepository = orderRepository;
  }

  async execute(orderId: string, amount: number, method: string): Promise<void> {
    // Recuperando a entidade Order do repositório
    const order = await this.orderRepository.findById(orderId);

    // Caso a ordem não exista, lançar erro
    if (!order) {
      throw new Error('Order not found');
    }

    // Realizando o pagamento
    const paymentSuccessful = await this.paymentService.processPayment(amount, method);

    if (paymentSuccessful) {
      // Atualizando o status da ordem para 'PAID'
      order.status = 'PAID';
      await this.orderRepository.update(order);  // Persistindo a ordem com o novo status

      console.log(`Payment for Order ${orderId} processed successfully.`);
    } else {
      throw new Error('Payment failed');
    }
  }
}
