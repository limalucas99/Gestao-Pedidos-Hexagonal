import { CategoryRepository } from '@/domain/repositories/category-repository';
import { FindCategoryProductsByIdDto } from '../dtos/find-category-products-by-id-dto';
import { FindCategoryProductsById } from '../ports/find-category-products-by-id';
import { Category } from '@/domain/entities/category';

export class FindCategoryProductsByIdUseCase implements FindCategoryProductsById {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(input: FindCategoryProductsByIdDto): Promise<Category[]> {
    return this.categoryRepository.findCategoryProductsById(input.id, input.page, input.pageSize);
  }
}