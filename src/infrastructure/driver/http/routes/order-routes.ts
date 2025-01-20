import { makeOrderController } from '@/application/factories/controllers/order-controller-factory';
import { CreateOrderDto } from '@/application/use-cases/order/dtos/create-order-dto';
import { FindAllOrdersDto } from '@/application/use-cases/order/dtos/find-all-orders-dto';
import { FindOrderByIdDto } from '@/application/use-cases/order/dtos/find-order-by-id-dto';
import { validateRequestMiddleware } from '@/shared/utils/validate-requests-dto';
import { Router } from 'express';

const router = Router();
const orderController = makeOrderController();

router.post('', validateRequestMiddleware(CreateOrderDto), orderController.create);

router.get('', validateRequestMiddleware(FindAllOrdersDto, ["page", "pageSize"]), orderController.findAll);

router.get('/:id', validateRequestMiddleware(FindOrderByIdDto), orderController.findById);

router.post('/:id/checkout', orderController.checkout);


export default router;
