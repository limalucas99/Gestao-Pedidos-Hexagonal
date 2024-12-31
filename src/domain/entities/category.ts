import { Product } from './product';

export class Category {
  constructor(
    public name: string,
    public description: string,
    public products?: Product[],
    public id?: string,
  ) {}
}