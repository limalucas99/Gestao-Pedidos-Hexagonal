import { Client } from '../entities/client';

export interface ClientRepository {
  create(product: Client): Promise<Client>;
  findByCpf(cpf: string): Promise<Client | null>;
  findAllClients(page: number, pageSize: number): Promise<Client[]>;
}
