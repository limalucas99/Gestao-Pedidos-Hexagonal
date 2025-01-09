import { Repository } from 'typeorm';
import { Order } from '@/domain/entities/order';
import { OrderDb } from '../entities/order-db';
import { OrderRepository } from '@/domain/repositories/order-repository';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export class OrderDBRepository implements OrderRepository {
  constructor(private repository: Repository<OrderDb>) {}

  async create(order: Order): Promise<Order> {
    try {
      return this.repository.save(order);
    } catch (error) {
      throw new Error(`Error ${error} on order creation`);
    }
  }

  async findAllOrders(page: number, pageSize: number): Promise<PaginatedResult<Order>> {
    try {
      const skip = (page - 1) * pageSize;
      const [data, total] = await this.repository.findAndCount({
        relations: ['Client'],
        skip,
        take: pageSize,
      });
      return {
        data,
        totalCount: total,
      };
    } catch (error) {
      throw new Error(`Error ${error} on finding all orders`);
    }
  }

  async findOrderById(id: string): Promise<Order | null> {
    try {
      return await this.repository.findOne({
        where: { id },
        relations: ['Products', 'Client'],
      });
    } catch (error) {
      throw new Error(`Error ${error} on finding order by id`);
    }
  }
}
