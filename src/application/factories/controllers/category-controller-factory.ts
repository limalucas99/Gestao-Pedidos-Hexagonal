import { CreateCategoryUseCase } from '@/application/use-cases/category/implementations/create-category-use-case';
import { FindAllCategoriesUseCase } from '@/application/use-cases/category/implementations/find-all-categories-use-case';
import { FindCategoryProductsByIdUseCase } from '@/application/use-cases/category/implementations/find-category-products-by-id-use-case';
import { AppDataSource } from '@/infrastructure/driven/db/config/database.config';
import { CategoryDb } from '@/infrastructure/driven/db/entities/category-db';
import { CategoryDBRepository } from '@/infrastructure/driven/db/repositories/category-db-repository';
import { CategoryController } from '@/infrastructure/driver/http/controllers/category-controller';

export function makeCategoryController(): CategoryController {
  const categoryRepository = new CategoryDBRepository(AppDataSource.getRepository(CategoryDb));

  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)
  const findAllCategoriesUseCase = new FindAllCategoriesUseCase(categoryRepository)
  const findCategoryProductsByIdUseCase = new FindCategoryProductsByIdUseCase(categoryRepository)

  return new CategoryController(
    createCategoryUseCase,
    findAllCategoriesUseCase,
    findCategoryProductsByIdUseCase
  );
}
