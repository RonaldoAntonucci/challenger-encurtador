import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeShortenUrlController } from '../factories';
import { makeShowUrlController } from '../factories/controllers/LoadUrlController';

export default (router: Router): void => {
  router.post('/encurtador', adaptRoute(makeShortenUrlController()));
  router.get('/:shortUrl', adaptRoute(makeShowUrlController()));
};
