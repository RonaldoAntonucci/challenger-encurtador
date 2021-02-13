import { HttpResponse } from '@/presentation/protocols';

export const success = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data,
});

export const redirect = (url: string): HttpResponse => ({
  statusCode: 302,
  redirect: url,
});

export const notFound = (): HttpResponse => ({
  statusCode: 404,
});
