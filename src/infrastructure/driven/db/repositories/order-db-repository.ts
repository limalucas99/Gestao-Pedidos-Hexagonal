import { Repository } from 'typeorm';
import { Order } from '@/domain/entities/order';
import { OrderDb } from '../entities/order-db';
import { OrderRepository } from '@/domain/repositories/order-repository';

export class OrderDBRepository implements OrderRepository {
  constructor(private repository: Repository<OrderDb>) {}

  async create(order: Order): Promise<Order> {
    return this.repository.save(order);
  }

  async findAllOrders(page: number, pageSize: number): Promise<Order[]> {
    const skip = (page - 1) * pageSize;
    return this.repository.find({
      relations: ['products'],
      skip,
      take: pageSize,
    });
  }

  async findOrderById(id: string): Promise<Order | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['products'],
    });
  }

}
