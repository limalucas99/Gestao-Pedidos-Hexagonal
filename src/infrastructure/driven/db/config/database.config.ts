import { ProductDb } from '@/infrastructure/driven/db/entities/product-db';
import { DataSource } from 'typeorm';
import { ClientDb } from '@/infrastructure/driven/db/entities/client-db';
import { CategoryDb } from '@/infrastructure/driven/db/entities/category-db';
import { OrderDb } from '@/infrastructure/driven/db/entities/order-db';
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'order-management',
  synchronize: true,
  logging: ['error', 'warn'],
  entities: [ProductDb, ClientDb, CategoryDb, OrderDb], 
  migrations: [`../migrations/*.ts`], 
});
