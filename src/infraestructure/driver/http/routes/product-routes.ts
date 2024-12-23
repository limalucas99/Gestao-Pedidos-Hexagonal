import { Router } from 'express';
import { productControllerFactory } from '@/factories/product-controller-factory';

const router = Router();
const productController = productControllerFactory();

router.post('/products', productController.create);

// router.put('/products/:id', productController.update);

// router.delete('/products/:id', productController.delete);

// router.get('/products/:id', productController.findById);

// router.get('/products', productController.findAll);

export default router;
