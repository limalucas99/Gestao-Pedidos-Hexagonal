import { Request, Response } from 'express';
import { validateDto } from '@/shared/utils/validate-requests-dto';
import { CreateCategory } from '@/application/use-cases/category/ports/create-category';
import { CreateCategoryDto } from '@/application/use-cases/category/dtos/create-category-dto';
import { FindAllCategories } from '@/application/use-cases/category/ports/find-all-categories';
import { FindAllCategoriesDto } from '@/application/use-cases/category/dtos/find-all-categories-dto';
import { FindCategoryProductsById } from '@/application/use-cases/category/ports/find-category-products-by-id';

export class CategoryController {
  constructor(
    private createCategoryUseCase: CreateCategory,
    private findAllCategoriesUseCase: FindAllCategories,
    private findCategoryProductsByIdUseCase: FindCategoryProductsById
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const errors = validateDto(CreateCategoryDto, req.body);
      if (errors.length > 0) return res.status(400).json({ message: errors });
      const category = await this.createCategoryUseCase.execute(req.body);
      return res.status(201).json(category);
      } catch (error: unknown) {
      return res.status(500).json({ message: error });
      }
    };

  findAllCategories = async (req: Request, res: Response): Promise<Response> => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const errors = validateDto(FindAllCategoriesDto, {page, pageSize});
      if (errors.length > 0) return res.status(400).json({ message: errors });
      const categories = await this.findAllCategoriesUseCase.execute({page, pageSize});
      return res.status(200).json({categories});
    } catch (error: unknown) {
      return res.status(500).json({ message: error });
    }
  }

  findCategoryProductsById = async (req: Request, res: Response): Promise<Response> => {
    try {
      // validar com base no DTO
      const id = req.params.id;
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const categoryProducts = await this.findCategoryProductsByIdUseCase.execute({id, page, pageSize});
      return res.status(200).json(categoryProducts);
    } catch (error: unknown) {
      return res.status(500).json({ message: error });
    }
  }
  
}