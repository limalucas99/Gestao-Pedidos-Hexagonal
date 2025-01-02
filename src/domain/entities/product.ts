import { Category } from './category';
import { Order } from './order';

export class Product {
  constructor(
    public name: string,
    public price: string,
    public description?: string,
    public category?: Category,
    public isActive?: boolean,
    public Orders?: Order[],
    public id?: string,
  ) {}
}
