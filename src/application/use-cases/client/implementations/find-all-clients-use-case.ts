import { Client } from '@/domain/entities/client';
import { ClientRepository } from '@/domain/repositories/client-repository';
import { FindAllClients } from '../ports/find-all-clients';
import { FindAllClientsDto } from '../dtos/find-all-clients-dto';

export class FindAllClientsUseCase implements FindAllClients {
  constructor(private clientRepository: ClientRepository) {}

  async execute(input: FindAllClientsDto): Promise<Client[]> {
    return this.clientRepository.findAllClients(input.page, input.pageSize);
  }
}