import { OrderRepository } from '@/domain/repositories/order-repository';
import { FindAllOrdersDto } from '../dtos/find-all-orders-dto';
import { FindAllOrders } from '../ports/find-all-orders';
import { Order } from '@/domain/entities/order';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export class FindAllOrdersUseCase implements FindAllOrders {
  constructor(private orderRepository: OrderRepository) {}

  async execute(input: FindAllOrdersDto): Promise<PaginatedResult<Order>> {
    return this.orderRepository.findAllOrders(input.page, input.pageSize);
  }
}