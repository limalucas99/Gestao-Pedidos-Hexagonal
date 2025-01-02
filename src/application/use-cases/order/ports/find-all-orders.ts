import { Order } from '@/domain/entities/order';
import { FindAllOrdersDto } from '../dtos/find-all-orders-dto';

export interface FindAllOrders {
  execute(input: FindAllOrdersDto): Promise<Order[]>;
}
