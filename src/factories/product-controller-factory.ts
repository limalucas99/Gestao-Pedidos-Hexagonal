import { ProductController } from '@/infraestructure/driver/http/controllers/product-controller';
import { CreateProductUseCase } from '@/application/use-cases/product/create-product-use-case';
// import { UpdateProductUseCase } from '@/application/use-cases/product/update-product-use-case';
// import { DeleteProductUseCase } from '@/application/use-cases/product/delete-product-use-case';
// import { FindProductByIdUseCase } from '@/application/use-cases/product/find-product-by-id-use-case';
// import { FindAllProductsUseCase } from '@/application/use-cases/product/find-all-products-use-case';
import { ProductDBRepository } from '@/infraestructure/driven/db/repositories/product-db-repository';
import { AppDataSource } from '@/config/database.config';
import { DBProduct } from '@/infraestructure/driven/db/entities/db-product';

export function productControllerFactory() {
  const productRepository = new ProductDBRepository(AppDataSource.getRepository(DBProduct));

  const createProductUseCase = new CreateProductUseCase(productRepository);
  // const updateProductUseCase = new UpdateProductUseCase(productRepository);
  // const deleteProductUseCase = new DeleteProductUseCase(productRepository);
  // const findProductByIdUseCase = new FindProductByIdUseCase(productRepository);
  // const findAllProductsUseCase = new FindAllProductsUseCase(productRepository);

  return new ProductController(
    createProductUseCase,
    // updateProductUseCase,
    // deleteProductUseCase,
    // findProductByIdUseCase,
    // findAllProductsUseCase
  );
}
