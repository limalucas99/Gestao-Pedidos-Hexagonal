import { AppDataSource } from '../config/database.config';
import { OrderDb } from '../entities/order-db';
import { OrderDBRepository } from '../repositories/order-db-repository';
import { ProductDBRepository } from '../repositories/product-db-repository';
import { ClientDBRepository } from '../repositories/client-db-repository';
import { ProductDb } from '../entities/product-db';
import { ClientDb } from '../entities/client-db';
import { Order } from '@/domain/entities/order';
import { Product } from '@/domain/entities/product';
import { OrderStatus } from '@/domain/enums/order-status.enum';

export const seedOrders = async () => {

  await AppDataSource.initialize()

  const orderRepository = new OrderDBRepository(AppDataSource.getRepository(OrderDb));
  const productRepository = new ProductDBRepository(AppDataSource.getRepository(ProductDb));
  const clientRepository = new ClientDBRepository(AppDataSource.getRepository(ClientDb));

  const products = await productRepository.findAllProducts();

  const clients = (await clientRepository.findAllClients(1, 20)).data;

  const orders: Order[] = [];

  for (let i = 0; i < 10; i++) { 
    const productQtt = Math.floor(Math.random() * 4) + 1;
    let totalAmount: number = 0;
    
    const orderProducts: Product[] = [];
    const usedProductsIndexes = new Set<number>();

    while (orderProducts.length < productQtt) {
      const prdIndex = Math.floor(Math.random() * products.length);

      if (!usedProductsIndexes.has(prdIndex)) {
        usedProductsIndexes.add(prdIndex);
        totalAmount += parseFloat(products[prdIndex].price);
        orderProducts.push(products[prdIndex]);
      }
    }

    const client = Math.random() < 0.5 
    ? undefined 
    : clients[Math.floor(Math.random() * clients.length)];

    const order: Order = new Order(
      OrderStatus.RECEIVED,
      totalAmount.toString(),
      new Date(),
      new Date(),
      client,
      orderProducts,
    )
    orders.push(order);
  }

  await Promise.all(orders.map(async (order) => {
    return orderRepository.create(order);
  }));

  await AppDataSource.destroy();
}