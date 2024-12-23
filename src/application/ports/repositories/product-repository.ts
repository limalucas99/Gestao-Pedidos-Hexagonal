import { Product } from '@/domain/product';

export interface ProductRepository {
  create(product: Product): Promise<Product>;
  // update(product: Product): Promise<Product>;
  // delete(productId: string): Promise<void>;
  // findById(productId: string): Promise<Product | null>;
  // findByCategory(category: string): Promise<Product[]>;
}
