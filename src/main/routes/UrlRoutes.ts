import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeShortenUrlController } from '../factories';

export default (router: Router): void => {
  router.post('/encurtador', adaptRoute(makeShortenUrlController()));
};
