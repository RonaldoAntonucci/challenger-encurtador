import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { adaptMiddleware } from '../adapters/ExpressMiddlewareAdapter';
import { makeShortenUrlController } from '../factories';
import { makeShowUrlController } from '../factories/controllers/LoadUrlController';
import { makeValidationMiddleware } from '../factories/middlewares';
import { makeEncryptUrlValidator } from '../factories/validators';

export default (router: Router): void => {
  router.post(
    '/encurtador',
    adaptMiddleware(makeValidationMiddleware(makeEncryptUrlValidator())),
    adaptRoute(makeShortenUrlController()),
  );
  router.get('/:shortUrl', adaptRoute(makeShowUrlController()));
};
