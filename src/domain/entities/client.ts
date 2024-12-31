import { Order } from './order';

export class Client {
  constructor(
    public name: string,
    public email: string,
    public cpf: string,
    public Orders?: Order[],
    public id?: string,
  ) {}
}