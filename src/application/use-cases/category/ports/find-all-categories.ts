import { Category } from '@/domain/entities/category';
import { FindAllCategoriesDto } from '../dtos/find-all-categories-dto';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export interface FindAllCategories {
  execute(input: FindAllCategoriesDto): Promise<PaginatedResult<Category>>;
}
