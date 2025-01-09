import { ProductRepository } from '@/domain/repositories/product-repository';
import { Product } from '@/domain/entities/product';
import { Repository } from 'typeorm';
import { ProductDb } from '../entities/product-db';

export class ProductDBRepository implements ProductRepository {
  constructor(
    private repository: Repository<ProductDb>, 
  ) {}

  async create(product: Product): Promise<Product> {
    try {
      return this.repository.save(product); 
    } catch (error) {
      throw new Error(`Error ${error} on product creation`);
    }
  }

  async findById(id: string): Promise<Product | null> {
    try {
      return this.repository.findOne({ where: { id, isActive: true }, relations: ['Category'] });
    } catch (error) {
      throw new Error(`Error ${error} on finding product by id`);
    }
  }

  async edit(id: string, product: Product): Promise<void> {
    try {
      await this.repository.update(id, product);
    } catch (error) {
      throw new Error(`Error ${error} on editing product`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.repository.update(id, { isActive: false });
    } catch (error) {
      throw new Error(`Error ${error} on deleting product`);
    }
  }
}
