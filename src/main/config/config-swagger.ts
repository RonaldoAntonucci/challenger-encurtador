import swaggerConfig from '@/main/docs';
import { serve, setup } from 'swagger-ui-express';
import { Express } from 'express';
import { noCache } from '../middlewares';

export default (app: Express): void => {
  app.use('/docs', noCache, serve, setup(swaggerConfig));
};
