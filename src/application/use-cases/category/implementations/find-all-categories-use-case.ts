import { CategoryRepository } from '@/domain/repositories/category-repository';
import { FindAllCategoriesDto } from '../dtos/find-all-categories-dto';
import { Category } from '@/domain/entities/category';
import { FindAllCategories } from '../ports/find-all-categories';

export class FindAllCategoriesUseCase implements FindAllCategories {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(input: FindAllCategoriesDto): Promise<Category[]> {
    return this.categoryRepository.findAllCategories(input.page, input.pageSize);
  }
}