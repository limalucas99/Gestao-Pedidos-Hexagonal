import { OrderStatus } from '../enums/order-status.enum';
import { Client } from './client';
import { Product } from './product';

export class Order {
  constructor(
    public status: OrderStatus,
    public totalAmount: string,
    public dtCreated: Date,
    public dtModified: Date,
    public Client?: Client,
    public Products?: Product[],
    public id?: string,
  ) {}
}
