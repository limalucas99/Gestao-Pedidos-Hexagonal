import { Order } from '@/domain/entities/order';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';
export interface OrderRepository {
  create(order: Order): Promise<Order>;
  findAllOrders(page: number, pageSize: number): Promise<PaginatedResult<Order>>;
  findOrderById(id: string): Promise<Order | null>;
  checkout(id: string): Promise<void>;
}
