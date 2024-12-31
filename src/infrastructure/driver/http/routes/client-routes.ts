import { makeClientController } from '@/application/factories/controllers/client-controller-factory';
import { Router } from 'express';

const router = Router();
const clientController = makeClientController();

router.post('', clientController.create);

router.get('/:cpf', clientController.findByCpf);

router.get('', clientController.findAllClients);

// router.delete('/clients/:id', clientController.delete);

// router.get('/clients/:id', clientController.findById);

// router.get('/clients', clientController.findAll);

export default router;
