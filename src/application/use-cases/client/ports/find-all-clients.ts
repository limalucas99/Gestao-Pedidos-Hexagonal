import { Client } from '@/domain/entities/client';
import { FindAllClientsDto } from '../dtos/find-all-clients-dto';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export interface FindAllClients {
  execute(input: FindAllClientsDto): Promise<PaginatedResult<Client>>;
}
