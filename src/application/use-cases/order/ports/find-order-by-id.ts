import { Order } from '@/domain/entities/order';
import { FindOrderByIdDto } from '../dtos/find-order-by-id-dto';

export interface FindOrderById {
  execute(input: FindOrderByIdDto): Promise<Order | null>;
}
