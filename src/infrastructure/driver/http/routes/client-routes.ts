import { makeClientController } from '@/application/factories/controllers/client-controller-factory';
import { CreateClientDto } from '@/application/use-cases/client/dtos/create-client-dto';
import { FindAllClientsDto } from '@/application/use-cases/client/dtos/find-all-clients-dto';
import { FindClientByCpfDto } from '@/application/use-cases/client/dtos/find-client-by-cpf-dto';
import { validateRequestMiddleware } from '@/shared/utils/validate-requests-dto';
import { Router } from 'express';

const router = Router();
const clientController = makeClientController();

router.post('', validateRequestMiddleware(CreateClientDto), clientController.create);

router.get('',validateRequestMiddleware(FindAllClientsDto, ["page", "pageSize"]), clientController.findAllClients);

router.get('/:cpf', validateRequestMiddleware(FindClientByCpfDto), clientController.findByCpf);

export default router;
