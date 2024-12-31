import { Client } from '@/domain/entities/client';
import { ClientRepository } from '@/domain/repositories/client-repository';
import { Repository } from 'typeorm';
import { ClientDb } from '../entities/client-db';

export class ClientDBRepository implements ClientRepository {
  constructor(private repository: Repository<ClientDb>) {}

  async create(client: Client): Promise<Client> {
    return this.repository.save(client);
  }

  async findByCpf(cpf: string): Promise<Client | null> {
    return await this.repository.findOne({ where: { cpf } });
  }

  async findAllClients(page: number, pageSize: number): Promise<Client[]> {
    const skip = (page - 1) * pageSize;
    return this.repository.find({ skip, take: pageSize });
  }

}
