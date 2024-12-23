import { CreateProduct } from '@/application/ports/use-cases/create-product';
import { ProductRepository } from '@/application/ports/repositories/product-repository';
import { CreateProductDTO } from '@/application/dto/order/create-product-dto';
import { Product } from '@/domain/product';

export class CreateProductUseCase implements CreateProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(input: CreateProductDTO): Promise<Product> {
    const product = new Product(
      input.name,
      input.category,
      input.description,
      input.price
    );
    return this.productRepository.create(product);
  }
}
