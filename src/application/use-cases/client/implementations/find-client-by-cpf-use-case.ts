import { Client } from '@/domain/entities/client';
import { ClientRepository } from '@/domain/repositories/client-repository';
import { FindClientByCpfDto } from '../dtos/find-client-by-cpf-dto';
import { FindClientByCpf } from '../ports/find-client-by-cpf';

export class FindClientByCpfUseCase implements FindClientByCpf {
  constructor(private clientRepository: ClientRepository) {}

  async execute(input: FindClientByCpfDto): Promise<Client | null> {
    return this.clientRepository.findByCpf(input.cpf);
  }
}