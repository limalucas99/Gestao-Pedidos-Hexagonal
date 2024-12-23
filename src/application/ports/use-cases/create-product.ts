import { CreateProductDTO } from '@/application/dto/order/create-product-dto';
import { Product } from '@/domain/product';

export interface CreateProduct {
  execute(input: CreateProductDTO): Promise<Product>;
}
