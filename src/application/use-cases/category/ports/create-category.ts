import { Category } from '@/domain/entities/category';
import { CreateCategoryDto } from '../dtos/create-category-dto';

export interface CreateCategory {
  execute(input: CreateCategoryDto): Promise<Category>;
}
