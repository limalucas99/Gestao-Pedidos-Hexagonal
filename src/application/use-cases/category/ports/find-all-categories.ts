import { Category } from '@/domain/entities/category';
import { FindAllCategoriesDto } from '../dtos/find-all-categories-dto';

export interface FindAllCategories {
  execute(input: FindAllCategoriesDto): Promise<Category[]>;
}
