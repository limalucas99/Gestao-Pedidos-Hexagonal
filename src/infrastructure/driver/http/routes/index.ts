import { Router } from 'express';
import productRoutes from '@/infrastructure/driver/http/routes/product-routes';
import clientRoutes from '@/infrastructure/driver/http/routes/client-routes';
import categoryRoutes from '@/infrastructure/driver/http/routes/category-routes';
import orderRoutes from '@/infrastructure/driver/http/routes/order-routes';

const routes = Router();

routes.use('/products', productRoutes);
routes.use('/clients', clientRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/orders', orderRoutes);

export default routes;