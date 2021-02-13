import { ShortenUrlController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';
import { makeEncryptUrlFactory } from '../usecases';

export const makeShortenUrlController = (): Controller<ShortenUrlController.Request> => {
  const controller = new ShortenUrlController(makeEncryptUrlFactory());
  return controller;
};
