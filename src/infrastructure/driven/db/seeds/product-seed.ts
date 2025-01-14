import { AppDataSource } from '../config/database.config';
import { ProductDb } from '../entities/product-db';
import { ProductDBRepository } from '../repositories/product-db-repository';
import { faker } from '@faker-js/faker';
import { Category } from '@/domain/entities/category';
import { CategoryDBRepository } from '../repositories/category-db-repository';
import { CategoryDb } from '../entities/category-db';
import { Product } from '@/domain/entities/product';

export const seedProducts = async () => {

  await AppDataSource.initialize()

  const productRepository = new ProductDBRepository(AppDataSource.getRepository(ProductDb));
  const categoryRepository = new CategoryDBRepository(AppDataSource.getRepository(CategoryDb));

  const categoriesPaginated = await categoryRepository.findAllCategories(1,3);

  const categories = categoriesPaginated.data;

  const products: Product[] = [];

  for (let i = 0; i < 20; i++) { 
    const product: Product = new Product(
      faker.food.dish(),
      faker.commerce.price({min: 15, max: 100 }),
      faker.food.description(),
      categories[Math.floor(Math.random() * categories.length)]
    )
    products.push(product);
  }

  await Promise.all(products.map(async (product) => {
    return productRepository.create(product);
  }));

  await AppDataSource.destroy();
}