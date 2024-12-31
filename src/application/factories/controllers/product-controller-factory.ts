import { ProductController } from '@/infrastructure/driver/http/controllers/product-controller';
import { CreateProductUseCase } from '@/application/use-cases/product/implementations/create-product-use-case';
import { ProductDBRepository } from '@/infrastructure/driven/db/repositories/product-db-repository';
import { AppDataSource } from '@/infrastructure/driven/db/config/database.config';
import { ProductDb } from '@/infrastructure/driven/db/entities/product-db';
import { CategoryDb } from '@/infrastructure/driven/db/entities/category-db';
import { FindProductByIdUseCase } from '@/application/use-cases/product/implementations/find-product-by-id-use-case';
import { CategoryDBRepository } from '@/infrastructure/driven/db/repositories/category-db-repository';
import { EditProductUseCase } from '@/application/use-cases/product/implementations/edit-product-use-case';
import { DeleteProductUseCase } from '@/application/use-cases/product/implementations/delete-product-use-case';

export function makeProductController(): ProductController {
  try {
    const productRepository = new ProductDBRepository(
      AppDataSource.getRepository(ProductDb),
    );

    const categoryRepository = new CategoryDBRepository(
      AppDataSource.getRepository(CategoryDb),
    )
  
    const createProductUseCase = new CreateProductUseCase(productRepository, categoryRepository);
    const findProductByIdUseCase = new FindProductByIdUseCase(productRepository);
    const editProductUseCase = new EditProductUseCase(productRepository, categoryRepository);
    const deleteProductUseCase = new DeleteProductUseCase(productRepository);
  
    return new ProductController(
      createProductUseCase,
      findProductByIdUseCase,
      editProductUseCase,
      deleteProductUseCase
    );
  } catch (error) {
    console.log(error);
    throw new Error(`Error ${error} on product controller factory`);
  }
}
