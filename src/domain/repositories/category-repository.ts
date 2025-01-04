import { Category } from '@/domain/entities/category';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export interface CategoryRepository {
  create(product: Category): Promise<Category>;
  findAllCategories(page: number, pageSize: number): Promise<PaginatedResult<Category>>;
  findCategoryProductsById(id: string, page: number, pageSize: number): Promise<Category[]>
  findById(id: string): Promise<Category | null>;
}
