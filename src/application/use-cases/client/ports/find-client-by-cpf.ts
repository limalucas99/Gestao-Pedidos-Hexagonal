import { Client } from '@/domain/entities/client';
import { FindClientByCpfDto } from '../dtos/find-client-by-cpf-dto';

export interface FindClientByCpf {
  execute(input: FindClientByCpfDto): Promise<Client | null>;
}
