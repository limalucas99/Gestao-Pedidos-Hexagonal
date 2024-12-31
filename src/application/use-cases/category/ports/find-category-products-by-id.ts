import { FindCategoryProductsByIdDto } from '../dtos/find-category-products-by-id-dto';
import { Category } from '@/domain/entities/category';

export interface FindCategoryProductsById {
  execute(input: FindCategoryProductsByIdDto): Promise<Category[]>;
}
