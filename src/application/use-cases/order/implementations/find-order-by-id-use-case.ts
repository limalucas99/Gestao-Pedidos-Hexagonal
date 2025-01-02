import { Order } from '@/domain/entities/order';
import { FindOrderByIdDto } from '../dtos/find-order-by-id-dto';
import { OrderRepository } from '@/domain/repositories/order-repository';
import { FindOrderById } from '../ports/find-order-by-id';

;

export class FindOrderByIdUseCase implements FindOrderById {
  constructor(private orderRepository: OrderRepository) {}

  async execute(input: FindOrderByIdDto): Promise<Order | null> {
    return this.orderRepository.findOrderById(input.id);
  }
}