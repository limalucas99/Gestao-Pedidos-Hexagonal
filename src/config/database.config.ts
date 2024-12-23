import { DBProduct } from '@/infraestructure/driven/db/entities/db-product';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Lucas@36',
  database: 'order-management',
  synchronize: true,
  logging: ['error', 'warn'],
  entities: [DBProduct], 
  migrations: [`${__dirname}/../infrastructure/driven/db/migrations/*.ts`], 
});
