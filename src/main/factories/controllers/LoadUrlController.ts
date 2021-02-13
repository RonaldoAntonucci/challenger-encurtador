import { ShowUrlController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';
import { makeHandleErrorsControllerDecorator } from '../decorators/HandleErrorsControllerFactory';
import { makeLoadUrlFactory } from '../usecases/LoadUrlFactory';

export const makeShowUrlController = (): Controller<ShowUrlController.Request> => {
  const controller = new ShowUrlController(makeLoadUrlFactory());
  return makeHandleErrorsControllerDecorator<ShowUrlController>(controller);
};
