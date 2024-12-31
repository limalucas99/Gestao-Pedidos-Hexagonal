import { ProductRepository } from '@/domain/repositories/product-repository';
import { DeleteProduct } from '../ports/delete-product';
import { DeleteProductDto } from '../dtos/delete-product-dto';


export class DeleteProductUseCase implements DeleteProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(input: DeleteProductDto): Promise<void> {
    await this.productRepository.delete(input.id);
  }
}