import { Order } from '@/domain/entities/order';

export interface OrderRepository {
  create(order: Order): Promise<Order>;
  findAllOrders(page: number, pageSize: number): Promise<Order[]>;
  findOrderById(id: string): Promise<Order | null>;
}
