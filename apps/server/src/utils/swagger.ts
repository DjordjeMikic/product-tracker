import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { appDir } from '../constants';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    basePath: '/api',
    info: {
      title: 'REST API Product Tracker',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'Authorization',
        },
      },
    },
  },
  apis: [`${appDir}/routes/*ts`, `${appDir}/schema/*.ts`],
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app: Express, port: number): void => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.info(`Docs available at http://localhost:${port}/docs`);
};
