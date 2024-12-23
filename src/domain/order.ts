export class Order {
  constructor(
    public id: string,
    public customerId: string | null,
    public status: 'RECEIVED' | 'PREPARING' | 'READY' | 'FINISHED',
    public items: Array<{ productId: string; quantity: number }>,
    public totalAmount: number
  ) {}
}
