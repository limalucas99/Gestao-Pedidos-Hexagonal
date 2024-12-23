import { CreateProduct } from '@/application/use-cases/product/ports/create-product';
import { ProductRepository } from '@/domain/repositories/product-repository';
import { CreateProductDTO } from '@/application/use-cases/product/dto/create-product-dto';
import { Product } from '@/domain/entities/product';

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
