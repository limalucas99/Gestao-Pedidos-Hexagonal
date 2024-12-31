import { Repository } from 'typeorm';
import { CategoryRepository } from '@/domain/repositories/category-repository';
import { Category } from '@/domain/entities/category';
import { CategoryDb } from '../entities/category-db';

export class CategoryDBRepository implements CategoryRepository {
  constructor(private repository: Repository<CategoryDb>) {}

  async create(category: Category): Promise<Category> {
    return this.repository.save(category);
  }

  async findAllCategories(page: number, pageSize: number): Promise<Category[]> {
    const skip = (page - 1) * pageSize;
    return this.repository.find({ skip , take: pageSize });
  }

  async findCategoryProductsById(id: string, page: number, pageSize: number): Promise<Category[]> {
    const skip = (page - 1) * pageSize;
    const categoryProducts = await this.repository.find({
      where: { id },
      relations: ['products'],
      skip,
      take: pageSize
    });
    return categoryProducts;
  }

  async findById(id: string): Promise<Category | null> {
    return this.repository.findOne({ where: { id } });
  }
}
