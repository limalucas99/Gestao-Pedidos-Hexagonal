import { CreateProductDto } from '@/application/use-cases/product/dtos/create-product-dto';
import { Product } from '@/domain/entities/product';

export interface CreateProduct {
  execute(input: CreateProductDto): Promise<Product>;
}
