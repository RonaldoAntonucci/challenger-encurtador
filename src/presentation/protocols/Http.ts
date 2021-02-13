export type HttpResponse<T = any> = {
  statusCode: number;
  body: T;
};

export type HttpRedirect = string;

export type HttpNotFound = {
  statusCode: 404;
};
