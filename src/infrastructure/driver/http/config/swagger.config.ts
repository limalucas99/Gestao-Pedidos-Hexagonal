import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import { generateSchemas } from '@/shared/utils/json-schema';

export function setupSwagger(app: Express): void {
  const schemas = generateSchemas();

  const options = {
    definition: {
    openapi: '3.0.3',
    info: {
      title: 'Order Management API',
      version: '1.0.0',
      description: 'API to manage orders and enable client self-service.',
    },
    components: {
      schemas,
    },
  },
  apis: [
    './src/infrastructure/driver/http/swagger/*.yaml', 
  ],
}

  const swaggerSpec = swaggerJSDoc(options);

  app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
