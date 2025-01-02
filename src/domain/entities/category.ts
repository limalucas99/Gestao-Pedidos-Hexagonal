import { Product } from './product';

export class Category {
  constructor(
    public name: string,
    public description: string,
    public Products?: Product[],
    public id?: string,
  ) {}
}