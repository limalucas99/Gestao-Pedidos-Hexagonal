import { Client } from '@/domain/entities/client';
import { CreateClientDto } from '../dtos/create-client-dto';
import { CreateClient } from '../ports/create-client';
import { ClientRepository } from '@/domain/repositories/client-repository';

export class CreateClientUseCase implements CreateClient {
  constructor(private clientRepository: ClientRepository) {}

  async execute(input: CreateClientDto): Promise<Client | undefined> {
    const client = new Client(input.name, input.email, input.cpf);
    const clientExists = await this.clientRepository.findByCpf(client.cpf);
    if (clientExists) return undefined;
    return this.clientRepository.create(client);
  }
}