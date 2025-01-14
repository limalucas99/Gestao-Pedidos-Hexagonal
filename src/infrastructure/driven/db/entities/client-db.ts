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

  @Column({ type: 'varchar', length: 11 })
  cpf: string;

  @OneToMany(() => OrderDb, order => order.Client)
  Orders: OrderDb[];
}
