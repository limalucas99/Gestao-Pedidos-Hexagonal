import { Product } from '@/domain/entities/product';

export interface ProductRepository {
  create(product: Product): Promise<Product>;
  edit(id: string, product: Product): Promise<void>;
  findById(id: string): Promise<Product | null>;
  delete(id: string): Promise<void>;  
}
