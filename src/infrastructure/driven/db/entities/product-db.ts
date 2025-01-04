import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, ManyToMany } from 'typeorm';
import { CategoryDb } from './category-db';
import { OrderDb } from './order-db';

@Entity('products')
export class ProductDb {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;
  
  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ManyToOne(() => CategoryDb, category => category.Products)
  Category: CategoryDb;

  @ManyToMany(() => OrderDb, (order) => order.Products)
  Orders: OrderDb[]
}
