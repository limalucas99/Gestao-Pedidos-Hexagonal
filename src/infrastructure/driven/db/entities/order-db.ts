import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { ClientDb } from './client-db';
import { ProductDb } from './product-db';
import { OrderStatus } from '@/domain/enums/order-status.enum';

@Entity('orders')
export class OrderDb {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.RECEIVED })
  status: OrderStatus;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  totalAmount: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dtCreated: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dtModified: Date;

  @ManyToOne(() => ClientDb, client => client.Orders)
  Client: ClientDb;

  @ManyToMany(() => ProductDb, product => product.Orders)
  @JoinTable({name: 'order_products'})
  Products: ProductDb[]
  
}
