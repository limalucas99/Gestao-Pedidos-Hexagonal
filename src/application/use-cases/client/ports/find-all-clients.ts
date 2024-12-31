import { Client } from '@/domain/entities/client';
import { FindAllClientsDto } from '../dtos/find-all-clients-dto';

export interface FindAllClients {
  execute(input: FindAllClientsDto): Promise<Client[]>;
}
