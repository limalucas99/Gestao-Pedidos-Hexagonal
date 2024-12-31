import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderDb } from './order-db';

@Entity('clients')
export class ClientDb {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'text' })
  cpf: string;

  @OneToMany(() => OrderDb, order => order.client)
  orders: OrderDb[];
}
