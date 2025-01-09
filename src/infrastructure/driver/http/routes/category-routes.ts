import { makeCategoryController } from '@/application/factories/controllers/category-controller-factory';
import { CreateCategoryDto } from '@/application/use-cases/category/dtos/create-category-dto';
import { FindAllCategoriesDto } from '@/application/use-cases/category/dtos/find-all-categories-dto';
import { FindCategoryProductsByIdDto } from '@/application/use-cases/category/dtos/find-category-products-by-id-dto';
import { validateRequestMiddleware } from '@/shared/utils/validate-requests-dto';
import { Router } from 'express';

const router = Router();
const categoryController = makeCategoryController();

router.post('', validateRequestMiddleware(CreateCategoryDto), categoryController.create);
router.get('', validateRequestMiddleware(FindAllCategoriesDto, ["page", "pageSize"]), categoryController.findAllCategories);
router.get('/:id/products', validateRequestMiddleware(FindCategoryProductsByIdDto), categoryController.findCategoryProductsById);

export default router;