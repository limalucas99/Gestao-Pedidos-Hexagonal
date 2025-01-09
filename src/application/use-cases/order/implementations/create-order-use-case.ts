import { Order } from '@/domain/entities/order';
import { CreateOrderDto } from '../dtos/create-order-dto';
import { CreateOrder } from '../ports/create-order';
import { OrderRepository } from '@/domain/repositories/order-repository';
import { ClientRepository } from '@/domain/repositories/client-repository';
import { ProductRepository } from '@/domain/repositories/product-repository';
import { OrderStatus } from '@/domain/enums/order-status.enum';


export class CreateOrderUseCase implements CreateOrder {
  constructor(
    private orderRepository: OrderRepository, 
    private clientRepository: ClientRepository, 
    private productRepository: ProductRepository
  ) {}

  async execute(input: CreateOrderDto): Promise<Order | undefined> {
    try {
      
    let client;
    if (input.clientCpf) {
    client = await this.clientRepository.findByCpf(input.clientCpf);
      if (!client) {
        throw new Error('Client not found');
      }
    }

    const products = await Promise.all(
      input.products.map(async (productId) => {
        const product = await this.productRepository.findById(productId);
        if (!product) {
          throw new Error(`Product with ID ${productId} not found`);
        }
        return product;
      })
    );

    const totalAmount = products.reduce((acc, product) => acc + parseFloat(product.price), 0).toFixed(2);

    const order = new Order(OrderStatus.RECEIVED, totalAmount, new Date(), new Date(), client, products);

    return this.orderRepository.create(order);
    } catch (error) {
      console.log(error);
      throw new Error(`Error ${error} on create order use-case`)
    }

  }
}