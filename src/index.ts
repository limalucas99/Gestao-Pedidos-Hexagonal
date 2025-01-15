import 'reflect-metadata';
import express from 'express';
import routes from '@/infrastructure/driver/http/routes';
import { AppDataSource } from '@/infrastructure/driven/db/config/database.config';
import { setupSwagger } from '@/infrastructure/driver/http/config/swagger.config';

const app = express();
app.use(express.json());

app.use('/v1', routes);

setupSwagger(app);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(3000, '0.0.0.0', () => console.log('Server running on http://0.0.0.0:3000'));
  })
  .catch((error) => console.log(error));
