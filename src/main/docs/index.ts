import { encurtadorPath, redirecionadorPath } from './paths';
import { encurtadorParamsSchema, errorSchema, newUrlSchema } from './schemas';
import { badRequest, serverError, notFound } from './components';

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
    {
      name: 'Redirecionador',
    },
  ],
  paths: {
    '/encurtador': encurtadorPath,
    '/{shortUrl}': redirecionadorPath,
  },
  schemas: {
    newUrl: newUrlSchema,
    encurtadorParams: encurtadorParamsSchema,
    error: errorSchema,
  },
  components: {
    badRequest,
    serverError,
    notFound,
  },
};
