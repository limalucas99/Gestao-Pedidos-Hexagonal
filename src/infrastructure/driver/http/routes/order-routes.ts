import { makeOrderController } from '@/application/factories/controllers/order-controller-factory';
import { Router } from 'express';

const router = Router();
const orderController = makeOrderController();

router.post('', orderController.create);

router.get('', orderController.findAll);

router.get('/:id', orderController.findById);


export default router;
