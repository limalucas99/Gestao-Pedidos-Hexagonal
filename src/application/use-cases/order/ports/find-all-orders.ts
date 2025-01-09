import { Order } from '@/domain/entities/order';
import { FindAllOrdersDto } from '../dtos/find-all-orders-dto';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export interface FindAllOrders {
  execute(input: FindAllOrdersDto): Promise<PaginatedResult<Order>>;
}
