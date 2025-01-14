import { seedCategories } from './category-seed';
import { seedClients } from './client-seed';
import { seedOrders } from './order-seed';
import { seedProducts } from './product-seed';

export const runSeeds = async () => {
  try {
    await seedCategories();
    await seedClients();
    await seedProducts();
    await seedOrders();
    console.log('Seeds executed successfully :D !');
  } catch (error: unknown) {
    console.error('Error running seeds', error);
  }
};

runSeeds();