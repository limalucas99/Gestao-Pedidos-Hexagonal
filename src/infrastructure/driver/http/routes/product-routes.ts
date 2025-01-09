import { Router } from 'express';
import { makeProductController } from '@/application/factories/controllers/product-controller-factory';
import { validateRequestMiddleware } from '@/shared/utils/validate-requests-dto';
import { CreateProductDto } from '@/application/use-cases/product/dtos/create-product-dto';
import { FindProductByIdDto } from '@/application/use-cases/product/dtos/find-product-by-id-dto';
import { EditProductDto } from '@/application/use-cases/product/dtos/edit-product-dto';
import { DeleteProductDto } from '@/application/use-cases/product/dtos/delete-product-dto';

const router = Router();
const productController = makeProductController();

router.post('', validateRequestMiddleware(CreateProductDto), productController.create);

router.get('/:id', validateRequestMiddleware(FindProductByIdDto), productController.findById);

router.patch('/:id', validateRequestMiddleware(EditProductDto), productController.edit);

router.delete('/:id', validateRequestMiddleware(DeleteProductDto), productController.delete);

export default router;
