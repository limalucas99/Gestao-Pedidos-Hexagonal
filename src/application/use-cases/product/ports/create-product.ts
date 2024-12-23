import { CreateProductDTO } from '@/application/use-cases/product/dto/create-product-dto';
import { Product } from '@/domain/entities/product';

export interface CreateProduct {
  execute(input: CreateProductDTO): Promise<Product>;
}
