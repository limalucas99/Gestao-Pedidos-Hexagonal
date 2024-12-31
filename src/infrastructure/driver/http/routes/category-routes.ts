import { makeCategoryController } from '@/application/factories/controllers/category-controller-factory';
import { Router } from 'express';

const router = Router();
const categoryController = makeCategoryController();

router.post('', categoryController.create);
router.get('', categoryController.findAllCategories);
router.get('/:id/products', categoryController.findCategoryProductsById);

export default router;
