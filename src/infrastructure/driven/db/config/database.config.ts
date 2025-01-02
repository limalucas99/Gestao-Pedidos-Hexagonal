import { ProductDb } from '@/infrastructure/driven/db/entities/product-db';
import { DataSource } from 'typeorm';
import { ClientDb } from '@/infrastructure/driven/db/entities/client-db';
import { CategoryDb } from '@/infrastructure/driven/db/entities/category-db';
import { OrderDb } from '@/infrastructure/driven/db/entities/order-db';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Lucas@36',
  database: 'order-management',
  synchronize: true,
  logging: ['error', 'warn'],
  entities: [ProductDb, ClientDb, CategoryDb, OrderDb], 
  migrations: [`../migrations/*.ts`], 
});
