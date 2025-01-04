import { Client } from '@/domain/entities/client';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export interface ClientRepository {
  create(product: Client): Promise<Client>;
  findByCpf(cpf: string): Promise<Client | null>;
  findAllClients(page: number, pageSize: number): Promise<PaginatedResult<Client>>;
}
