import { Product } from '@/domain/entities/product';
import { FindProductByIdDto } from '../dtos/find-product-by-id-dto';


export interface FindProductById {
  execute(input: FindProductByIdDto): Promise<Product | null>;
}
