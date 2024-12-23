import { CreateProductUseCase } from '@/application/use-cases/product/implementation/create-product-use-case';
// import { UpdateProductUseCase } from '@/application/use-cases/product/update-product-use-case';
// import { DeleteProductUseCase } from '@/application/use-cases/product/delete-product-use-case';
// import { FindProductByIdUseCase } from '@/application/use-cases/product/find-product-by-id-use-case';
// import { FindAllProductsUseCase } from '@/application/use-cases/product/find-all-products-use-case';
import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { CreateProductDTO } from '@/application/use-cases/product/dto/create-product-dto';
import { validate } from 'class-validator';

export class ProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    // private updateProductUseCase: UpdateProductUseCase,
    // private deleteProductUseCase: DeleteProductUseCase,
    // private findProductByIdUseCase: FindProductByIdUseCase,
    // private findAllProductsUseCase: FindAllProductsUseCase
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      // move this block to a method to avoid repetitions (DRY)
      const createProductDto = plainToInstance(CreateProductDTO, req.body);
      const errors = await validate(createProductDto);
      if (errors.length > 0) {
        return res.status(400).json({ message: errors });
      }
      const product = await this.createProductUseCase.execute(req.body);
      return res.status(201).json(product);
      } catch (error: unknown) {
      return res.status(500).json({ message: error });
      }
    };

  // update = async (req: Request, res: Response): Promise<Response> => {
  //   try {
  //     const product = await this.updateProductUseCase.execute(req.params.id, req.body);
  //     return res.status(200).json(product);
  //   } catch (error: unknown) {
  //     return res.status(500).json({ message: error });
  //   }
  // };

  // delete = async (req: Request, res: Response): Promise<Response> => {
  //   try {
  //     await this.deleteProductUseCase.execute(req.params.id);
  //     return res.status(204).send();
  //   } catch (error: unknown) {
  //     return res.status(500).json({ message: error });
  //   }
  // };

  // findById = async (req: Request, res: Response): Promise<Response> => {
  //   try {
  //     const product = await this.findProductByIdUseCase.execute(req.params.id);
  //     return res.status(200).json(product);
  //   } catch (error: unknown) {
  //     return res.status(500).json({ message: error });
  //   }
  // };

  // findAll = async (req: Request, res: Response): Promise<Response> => {
  //   try {
  //     const products = await this.findAllProductsUseCase.execute();
  //     return res.status(200).json(products);
  //   } catch (error: unknown) {
  //     return res.status(500).json({ message: error });
  //   }
  // };
}