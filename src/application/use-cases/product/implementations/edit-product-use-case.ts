import { ProductRepository } from '@/domain/repositories/product-repository';
import { Product } from '@/domain/entities/product';
import { EditProduct } from '../ports/edit-product';
import { EditProductDto } from '../dtos/edit-product-dto';
import { CategoryRepository } from '@/domain/repositories/category-repository';

export class EditProductUseCase implements EditProduct {
  constructor(private productRepository: ProductRepository, private categoryRepository: CategoryRepository) {}

  async execute(input: EditProductDto): Promise<void> {
    const existingProduct = await this.productRepository.findById(input.id);
    if (!existingProduct) {
      throw new Error('Product not found');
    }

    let category;   
    if (input.categoryId) {
      category = await this.categoryRepository.findById(input.categoryId);
      if (!category) {
        throw new Error('Category not found');
      }
      existingProduct.category = category;
    }

    const updatedProduct = new Product(
      input.name ?? existingProduct.name,
      input.price ?? existingProduct.price,
      input.description ?? existingProduct.description,
      category ?? existingProduct.category,
    );

    await this.productRepository.edit(input.id, updatedProduct);
  }

}
