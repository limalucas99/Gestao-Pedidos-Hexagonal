import { Client } from '@/domain/entities/client';
import { CreateClientDto } from '../dtos/create-client-dto';

export interface CreateClient {
  execute(input: CreateClientDto): Promise<Client | undefined>;
}
