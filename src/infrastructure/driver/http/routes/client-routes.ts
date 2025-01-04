import { makeClientController } from '@/application/factories/controllers/client-controller-factory';
import { Router } from 'express';

const router = Router();
const clientController = makeClientController();

router.post('', clientController.create);

router.get('', clientController.findAllClients);

router.get('/:cpf', clientController.findByCpf);

export default router;
