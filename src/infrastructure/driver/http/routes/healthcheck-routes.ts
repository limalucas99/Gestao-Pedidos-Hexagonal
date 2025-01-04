import { Router } from 'express';

const healthcheckRoutes = Router();

healthcheckRoutes.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
  });
});

export default healthcheckRoutes;
