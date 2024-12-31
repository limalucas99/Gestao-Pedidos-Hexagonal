import { Router } from 'express';
import { makeProductController } from '@/application/factories/controllers/product-controller-factory';

const router = Router();
const productController = makeProductController();

router.post('', productController.create);

router.get('/:id', productController.findById);

router.patch('/:id', productController.edit);

router.delete('/:id', productController.delete);

export default router;
