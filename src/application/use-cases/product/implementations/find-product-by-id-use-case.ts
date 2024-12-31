import { ProductRepository } from '@/domain/repositories/product-repository';
import { FindCategoryProductsByIdDto } from '../../category/dtos/find-category-products-by-id-dto';
import { FindProductById } from '../ports/find-product-by-id';
import { Product } from '@/domain/entities/product';
import { FindProductByIdDto } from '../dtos/find-product-by-id-dto';


export class FindProductByIdUseCase implements FindProductById {
  constructor(private productRepository: ProductRepository) {}

  async execute(input: FindProductByIdDto): Promise<Product | null> {
    return this.productRepository.findById(input.id);
  }
}