import { ShowUrlController } from '@/presentation/controllers';
import { makeLoadUrlFactory } from '../usecases/LoadUrlFactory';

export const makeShowUrlController = (): ShowUrlController => {
  const controller = new ShowUrlController(makeLoadUrlFactory());
  return controller;
};
