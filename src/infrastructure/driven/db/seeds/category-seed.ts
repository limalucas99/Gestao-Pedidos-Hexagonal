import { AppDataSource } from '../config/database.config';
import { CategoryDb } from '../entities/category-db';
import { CategoryDBRepository } from '../repositories/category-db-repository';
import { Category } from '@/domain/entities/category';

export const seedCategories = async () => {

  await AppDataSource.initialize()

  const categoryRepository = new CategoryDBRepository(AppDataSource.getRepository(CategoryDb));

  const categories: Category[] = [
    {
      name: "Lanche",
      description: "Lanches em geral"
    }, {
      name: "Acompanhamento",
      description: "Acompanhamentos em geral"
    }, {
      name: "Bebida",
      description: "Bebidas em geral"
    }, {
      name: "Sobremesa",
      description: "Sobremesas em geral"
    }];
    
  await Promise.all(categories.map(async (category) => {
    return categoryRepository.create(category);
  }));

  await AppDataSource.destroy();
}