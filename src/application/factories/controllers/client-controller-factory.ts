import { CreateClientUseCase } from '@/application/use-cases/client/implementations/create-client-use-case';
import { FindAllClientsUseCase } from '@/application/use-cases/client/implementations/find-all-clients-use-case';
import { FindClientByCpfUseCase } from '@/application/use-cases/client/implementations/find-client-by-cpf-use-case';
import { AppDataSource } from '@/infrastructure/driven/db/config/database.config';
import { ClientDb } from '@/infrastructure/driven/db/entities/client-db';
import { ClientDBRepository } from '@/infrastructure/driven/db/repositories/client-db-repository';
import { ClientController } from '@/infrastructure/driver/http/controllers/client-controller';

export function makeClientController(): ClientController {
  const clientRepository = new ClientDBRepository(AppDataSource.getRepository(ClientDb));

  const createClientUseCase = new CreateClientUseCase(clientRepository);
  const findClientByCpfUseCase = new FindClientByCpfUseCase(clientRepository);
  const findAllClientsUseCase = new FindAllClientsUseCase(clientRepository);

  return new ClientController(
    createClientUseCase,
    findClientByCpfUseCase,
    findAllClientsUseCase,
  );
}
