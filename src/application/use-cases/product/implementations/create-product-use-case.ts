import { CreateProduct } from '@/application/use-cases/product/ports/create-product';
import { ProductRepository } from '@/domain/repositories/product-repository';
import { CreateProductDto } from '@/application/use-cases/product/dtos/create-product-dto';
import { Product } from '@/domain/entities/product';
import { CategoryRepository } from '@/domain/repositories/category-repository';

export class CreateProductUseCase implements CreateProduct {
  constructor(private productRepository: ProductRepository, private categoryRepository: CategoryRepository) {}

  async execute(input: CreateProductDto): Promise<Product> {
    try {
      const category = await this.categoryRepository.findById(input.categoryId);
      if (!category) {
        throw new Error('Category not found');
      }
      const product = new Product(
        input.name,
        input.price,
        input.description,
        category
      );
      return this.productRepository.create(product);
    } catch (error) {
      console.log(error);
      throw new Error(`Error ${error} on product creation`);
    }
  }
}
