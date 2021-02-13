import { Controller } from '@/presentation/protocols';
import { HandleErrorsControllerDecorator } from '@/main/decorators';

export const makeHandleErrorsControllerDecorator = <T extends Controller>(
  controller: T,
): Controller => new HandleErrorsControllerDecorator<T>(controller);
