import { OrderRepository } from '@/domain/repositories/order-repository';
import { FindAllOrdersDto } from '../dtos/find-all-orders-dto';
import { FindAllOrders } from '../ports/find-all-orders';
import { Order } from '@/domain/entities/order';

export class FindAllOrdersUseCase implements FindAllOrders {
  constructor(private orderRepository: OrderRepository) {}

  async execute(input: FindAllOrdersDto): Promise<Order[]> {
    return this.orderRepository.findAllOrders(input.page, input.pageSize);
  }
}