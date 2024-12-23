import { ProductRepository } from '@/application/ports/repositories/product-repository';
import { Product } from '@/domain/product';
import { DBProduct } from '@/infraestructure/driven/db/entities/db-product';
import { Repository } from 'typeorm';

export class ProductDBRepository implements ProductRepository {
  constructor(private repository: Repository<DBProduct>) {}

  async create(product: Product): Promise<Product> {
    const dbProduct = this.repository.create(product);
    await this.repository.save(dbProduct);
    return product;
  }

  // async update(product: Product): Promise<Product> {
  //   await this.repository.save(product);
  //   return product;
  // }

  // async findById(id: string): Promise<Product | null> {
  //   const dbProduct = await this.repository.findOne({ where: { id } });
  //   return dbProduct ? new Product(dbProduct.name, dbProduct.category, dbProduct.description, dbProduct.price) : null;
  // }

}
