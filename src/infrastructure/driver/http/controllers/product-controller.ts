import { Request, Response } from 'express';
import { validateDto } from '@/shared/utils/validate-requests-dto';
import { CreateProduct } from '@/application/use-cases/product/ports/create-product';
import { FindProductById } from '@/application/use-cases/product/ports/find-product-by-id';
import { CreateProductDto } from '@/application/use-cases/product/dtos/create-product-dto';
import { EditProduct } from '@/application/use-cases/product/ports/edit-product';
import { FindProductByIdDto } from '@/application/use-cases/product/dtos/find-product-by-id-dto';
import { EditProductDto } from '@/application/use-cases/product/dtos/edit-product-dto';
import { DeleteProductDto } from '@/application/use-cases/product/dtos/delete-product-dto';
import { DeleteProduct } from '@/application/use-cases/product/ports/delete-product';

export class ProductController {
  constructor(
    private createProductUseCase: CreateProduct,
    private findProductByIdUseCase: FindProductById,
    private editProductUseCase: EditProduct,
    private deleteProductUseCase: DeleteProduct
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const errors = validateDto(CreateProductDto, req.body);
      if (errors.length > 0) {
        return res.status(400).json({ message: errors });
      }
      const product = await this.createProductUseCase.execute(req.body);
      if (!product) return res.status(400).json({message: "Invalid input"});
      return res.status(201).json(product);
      } catch (error: unknown) {
      return res.status(500).json({ message: "Internal server error trying to create a product" });
      }
    };

  findById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;
      const errors = validateDto(FindProductByIdDto, {id});
      if (errors.length > 0) {
        return res.status(400).json({ message: errors });
      }
      const product = await this.findProductByIdUseCase.execute({id});
      if (!product) return res.status(404).json({message: "Product not found!"})
      return res.status(200).json(product);
    } catch (error: unknown) {
      return res.status(500).json({ message: error });
    }
  }

  edit = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;
      const errors = validateDto(EditProductDto, {id, ...req.body});
      if (errors.length > 0) {
        return res.status(400).json({ message: errors });
      }
      if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Body cannot be empty!" });
      }
      await this.editProductUseCase.execute({id, ...req.body});
      return res.status(200).json({message: "product updated sucessfully!"});
    } catch (error: unknown) {
      return res.status(500).json({ message: error });
    }
  }

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;
      const errors = validateDto(DeleteProductDto, {id});
      if (errors.length > 0) {
        return res.status(400).json({ message: errors });
      }
      await this.deleteProductUseCase.execute({id});
      return res.status(200).json({message: "product deleted sucessfully!"});
    } catch (error: unknown) {
      return res.status(500).json({ message: error });
    }
  }

}