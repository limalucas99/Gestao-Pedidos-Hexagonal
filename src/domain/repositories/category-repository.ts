import { Category } from '../entities/category';

export interface CategoryRepository {
  create(product: Category): Promise<Category>;
  findAllCategories(page: number, pageSize: number): Promise<Category[]>;
  findCategoryProductsById(id: string, page: number, pageSize: number): Promise<Category[]>
  findById(id: string): Promise<Category | null>;
}
