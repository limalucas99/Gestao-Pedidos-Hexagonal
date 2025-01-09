import { CategoryRepository } from '@/domain/repositories/category-repository';
import { FindAllCategoriesDto } from '../dtos/find-all-categories-dto';
import { Category } from '@/domain/entities/category';
import { FindAllCategories } from '../ports/find-all-categories';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export class FindAllCategoriesUseCase implements FindAllCategories {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(input: FindAllCategoriesDto): Promise<PaginatedResult<Category>> {
    return this.categoryRepository.findAllCategories(input.page, input.pageSize);
  }
}