import { encurtadorPath } from './paths';
import { encurtadorParamsSchema, errorSchema, newUrlSchema } from './schemas';
import { badRequest, serverError } from './components';

export default {
  openapi: '3.0.3',
  info: {
    title: 'Encurtador',
    description: 'API desenvolvida para um desafio de um encurtador de urls',
    version: '1.0.0',
  },
  servers: [
    {
      url: '/',
    },
  ],
  tags: [
    {
      name: 'Encurtar',
    },
  ],
  paths: {
    '/encurtador': encurtadorPath,
  },
  schemas: {
    newUrl: newUrlSchema,
    encurtadorParams: encurtadorParamsSchema,
    error: errorSchema,
  },
  components: {
    badRequest,
    serverError,
  },
};
