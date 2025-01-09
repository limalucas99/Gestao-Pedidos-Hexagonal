import { Request, Response } from 'express';
import { CreateOrder } from '@/application/use-cases/order/ports/create-order';
import { CreateOrderDto } from '@/application/use-cases/order/dtos/create-order-dto';
import { FindAllOrders } from '@/application/use-cases/order/ports/find-all-orders';
import { FindAllOrdersDto } from '@/application/use-cases/order/dtos/find-all-orders-dto';
import { FindOrderByIdDto } from '@/application/use-cases/order/dtos/find-order-by-id-dto';
import { FindOrderById } from '@/application/use-cases/order/ports/find-order-by-id';

export class OrderController {
  constructor(
    private createOrderUseCase: CreateOrder,
    private findAllOrdersUseCase: FindAllOrders,
    private findOrderByIdUseCase: FindOrderById
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const order = await this.createOrderUseCase.execute(req.body);
      if (!order) return res.status(400).json({ message: "Invalid body request" });
      return res.status(201).json(order);
      } catch (error: unknown) {
      return res.status(500).json({ message: "Internal server error trying to create an order" });
      }
    };

    findAll = async (req: Request, res: Response): Promise<Response> => {
      try {
        const page = Number(req.query.page);
        const pageSize = Number(req.query.pageSize);    
        const orders = await this.findAllOrdersUseCase.execute({page, pageSize});
        return res.status(200).json(orders);
      } catch (error: unknown) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error trying to find all orders" });
      }
    }

    findById = async (req: Request, res: Response): Promise<Response> => {
      try {
        const order = await this.findOrderByIdUseCase.execute({id: req.params.id});
        if (!order) return res.status(404).json({ message: "Order not found" });
        return res.status(200).json(order);
      } catch (error: unknown) {
        return res.status(500).json({ message: "Internal server error trying to find an order by id" });
      }
    }
    
}