import { OrderRepository } from '@/domain/repositories/order-repository';
import { Checkout } from '../ports/checkout';

export class CheckoutUseCase implements Checkout{
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string): Promise<void> {
    return this.orderRepository.checkout(id);
  }
}