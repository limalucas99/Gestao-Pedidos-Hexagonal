import { Client } from '@/domain/entities/client';
import { ClientRepository } from '@/domain/repositories/client-repository';
import { FindAllClients } from '../ports/find-all-clients';
import { FindAllClientsDto } from '../dtos/find-all-clients-dto';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export class FindAllClientsUseCase implements FindAllClients {
  constructor(private clientRepository: ClientRepository) {}

  async execute(input: FindAllClientsDto): Promise<PaginatedResult<Client>> {
    return this.clientRepository.findAllClients(input.page, input.pageSize);
  }
}