import 'reflect-metadata';
import express from 'express';
import productRoutes from '@/infrastructure/driver/http/routes/product-routes';
import { AppDataSource } from '@/infrastructure/driven/db/config/database.config';

const app = express();
app.use(express.json());

app.use('/api', productRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch((error) => console.log(error));
