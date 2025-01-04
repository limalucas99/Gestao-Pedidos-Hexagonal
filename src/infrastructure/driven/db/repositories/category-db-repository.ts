import { Repository } from 'typeorm';
import { CategoryRepository } from '@/domain/repositories/category-repository';
import { Category } from '@/domain/entities/category';
import { CategoryDb } from '../entities/category-db';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export class CategoryDBRepository implements CategoryRepository {
  constructor(private repository: Repository<CategoryDb>) {}

  async create(category: Category): Promise<Category> {
    return this.repository.save(category);
  }

  async findAllCategories(page: number, pageSize: number): Promise<PaginatedResult<Category>> {
    const skip = (page - 1) * pageSize;
    const [data, total] = await this.repository.findAndCount({ skip , take: pageSize });
    return {
      data,
      totalCount: total,
    }
  }

  async findCategoryProductsById(id: string, page: number, pageSize: number): Promise<Category[]> {
    const skip = (page - 1) * pageSize;
    const categoryProducts = await this.repository.find({
      where: { id },
      relations: ['Products'],
      skip,
      take: pageSize
    });
    return categoryProducts;
  }

  async findById(id: string): Promise<Category | null> {
    return this.repository.findOne({ where: { id } });
  }
}
