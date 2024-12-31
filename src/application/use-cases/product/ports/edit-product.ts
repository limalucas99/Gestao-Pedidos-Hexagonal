import { EditProductDto } from '../dtos/edit-product-dto';

export interface EditProduct {
  execute(input: EditProductDto): Promise<void>;
}
