import { DeleteProductDto } from '../dtos/delete-product-dto';

export interface DeleteProduct {
  execute(input: DeleteProductDto): Promise<void>;
}
