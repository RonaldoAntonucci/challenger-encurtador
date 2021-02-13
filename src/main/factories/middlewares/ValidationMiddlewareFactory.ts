import { ValidationMiddleware } from '@/presentation/middlewares';
import { Middleware, Validation } from '@/presentation/protocols';

export const makeValidationMiddleware = (validation: Validation): Middleware =>
  new ValidationMiddleware(validation);
