import { Client } from '@/domain/entities/client';
import { ClientRepository } from '@/domain/repositories/client-repository';
import { Repository } from 'typeorm';
import { ClientDb } from '../entities/client-db';
import { PaginatedResult } from '@/shared/interfaces/pagination-result';

export class ClientDBRepository implements ClientRepository {
  constructor(private repository: Repository<ClientDb>) {}

  async create(client: Client): Promise<Client> {
    try {
      return await this.repository.save(client);
    } catch (error) {
      throw new Error(`Error creating client: ${error}`);
    }
  }

  async findByCpf(cpf: string): Promise<Client | null> {
    try {
      return await this.repository.findOne({ where: { cpf } });
    } catch (error) {
      throw new Error(`Error finding client by CPF: ${error}`);
    }
  }

  async findAllClients(page: number, pageSize: number): Promise<PaginatedResult<Client>> {
    try {
      const skip = (page - 1) * pageSize;
      const [data, total] = await this.repository.findAndCount({ skip, take: pageSize });
      return {
        data,
        totalCount: total,
      };
    } catch (error) {
      throw new Error(`Error finding all clients: ${error}`);
    }
  }
}
