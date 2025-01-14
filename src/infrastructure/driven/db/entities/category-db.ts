import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductDb } from './product-db';

@Entity('categories')
export class CategoryDb {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @OneToMany(() => ProductDb, product => product.Category)
  Products: ProductDb[];

}
