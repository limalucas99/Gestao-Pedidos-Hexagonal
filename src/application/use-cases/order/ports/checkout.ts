export interface Checkout {
  execute(id: string): Promise<void>;
}
