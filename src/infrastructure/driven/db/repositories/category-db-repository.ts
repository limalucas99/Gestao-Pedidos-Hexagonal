import { Repository } from 'typeorm';
import { CategoryRepository } from '@/domain/repositories/category-repository';
import { Category } from '@/domain/entities/category';
import { CategoryDb } from '../entities/category-db';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export class CategoryDBRepository implements CategoryRepository {
  constructor(private repository: Repository<CategoryDb>) {}

  async create(category: Category): Promise<Category> {
    try {
      return await this.repository.save(category);
    } catch (error) {
      throw new Error(`Error creating category: ${error}`);
    }
  }

  async findAllCategories(page: number, pageSize: number): Promise<PaginatedResult<Category>> {
    try {
      const skip = (page - 1) * pageSize;
      const [data, total] = await this.repository.findAndCount({ skip , take: pageSize });
      return {
        data,
        totalCount: total,
      };
    } catch (error) {
      throw new Error(`Error finding all categories: ${error}`);
    }
  }

  async findCategoryProductsById(id: string, page: number, pageSize: number): Promise<Category[]> {
    try {
      const skip = (page - 1) * pageSize;
      const categoryProducts = await this.repository.find({
        where: { id },
        relations: ['Products'],
        skip,
        take: pageSize
      });
      return categoryProducts;
    } catch (error) {
      throw new Error(`Error finding category products by ID: ${error}`);
    }
  }

  async findById(id: string): Promise<Category | null> {
    try {
      return await this.repository.findOne({ where: { id } });
    } catch (error) {
      throw new Error(`Error finding category by ID: ${error}`);
    }
  }
}
