import { faker } from '@faker-js/faker';
import { ClientDBRepository } from '../repositories/client-db-repository';
import { AppDataSource } from '../config/database.config';
import { ClientDb } from '../entities/client-db';
import { Client } from '@/domain/entities/client';

export const seedClients = async () => {

  await AppDataSource.initialize()

  const clientRepository = new ClientDBRepository(AppDataSource.getRepository(ClientDb));

  const clients: Client[] = [];

  for (let i = 0; i < 10; i++) { 
    const client: Client = new Client(
      faker.person.fullName(),
      faker.internet.email(),
      faker.string.numeric({length: {min: 11, max: 11}}),
    )
    clients.push(client);
  }

  await Promise.all(clients.map(async (client) => { {
    return clientRepository.create(client);
  }}))

  await AppDataSource.destroy();
}