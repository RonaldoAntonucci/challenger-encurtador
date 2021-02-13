import { HttpNotFound, HttpRedirect, HttpResponse } from './Http';

export interface Controller<T = any> {
  handle(request: T): Promise<HttpResponse | HttpRedirect | HttpNotFound>;
}
