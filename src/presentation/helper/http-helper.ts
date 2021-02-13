import {
  HttpRedirect,
  HttpResponse,
  HttpNotFound,
} from '@/presentation/protocols';

export const success = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data,
});

export const redirect = (url: string): HttpRedirect => url;

export const notFound = (): HttpNotFound => ({
  statusCode: 404,
});
