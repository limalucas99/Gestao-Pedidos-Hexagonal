import { IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class DBProduct {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @IsString()
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @IsString()
  @Column({ type: 'varchar', length: 100 })
  category: string;

  @IsString()
  @Column({ type: 'text' })
  description: string;

  @IsString()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
