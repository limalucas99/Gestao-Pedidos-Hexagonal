import { CheckoutUseCase } from '@/application/use-cases/order/implementations/checkout-use-case';
import { CreateOrderUseCase } from '@/application/use-cases/order/implementations/create-order-use-case';
import { FindAllOrdersUseCase } from '@/application/use-cases/order/implementations/find-all-orders-use-case';
import { FindOrderByIdUseCase } from '@/application/use-cases/order/implementations/find-order-by-id-use-case';
import { AppDataSource } from '@/infrastructure/driven/db/config/database.config';
import { ClientDb } from '@/infrastructure/driven/db/entities/client-db';
import { OrderDb } from '@/infrastructure/driven/db/entities/order-db';
import { ProductDb } from '@/infrastructure/driven/db/entities/product-db';
import { ClientDBRepository } from '@/infrastructure/driven/db/repositories/client-db-repository';
import { OrderDBRepository } from '@/infrastructure/driven/db/repositories/order-db-repository';
import { ProductDBRepository } from '@/infrastructure/driven/db/repositories/product-db-repository';
import { OrderController } from '@/infrastructure/driver/http/controllers/order-controller';

export function makeOrderController(): OrderController {
  try {
    const orderRepository = new OrderDBRepository(AppDataSource.getRepository(OrderDb));
    const clientRepository = new ClientDBRepository(AppDataSource.getRepository(ClientDb));
    const productRepository = new ProductDBRepository(AppDataSource.getRepository(ProductDb));

    const createOrderUseCase = new CreateOrderUseCase(orderRepository, clientRepository, productRepository);
    const findAllOrdersUseCase = new FindAllOrdersUseCase(orderRepository);
    const findOrderByIdUseCase = new FindOrderByIdUseCase(orderRepository);
    const checkoutUseCase = new CheckoutUseCase(orderRepository);

    return new OrderController(
      createOrderUseCase,
      findAllOrdersUseCase,
      findOrderByIdUseCase,
      checkoutUseCase
    );
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create Order Controller');
  }
}
