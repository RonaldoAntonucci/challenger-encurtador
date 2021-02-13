import { HttpResponse } from '@/presentation/protocols';
import { ServerError } from '../errors/ServerError';

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

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});
