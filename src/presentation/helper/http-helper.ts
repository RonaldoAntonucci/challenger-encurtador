import { HttpResponse } from '@/presentation/protocols';

export const success = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data,
});
