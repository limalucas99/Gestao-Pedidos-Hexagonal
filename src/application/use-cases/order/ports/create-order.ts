import { Order } from '@/domain/entities/order';
import { CreateOrderDto } from '../dtos/create-order-dto';

export interface CreateOrder {
  execute(input: CreateOrderDto): Promise<Order | undefined>;
}
