import { CreateCategory } from '../ports/create-category';
import { CreateCategoryDto } from '../dtos/create-category-dto';
import { Category } from '@/domain/entities/category';
import { CategoryRepository } from '@/domain/repositories/category-repository';

export class CreateCategoryUseCase implements CreateCategory {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(input: CreateCategoryDto): Promise<Category> {
    const category = new Category(input.name, input.description);
    return this.categoryRepository.create(category);
  }
}