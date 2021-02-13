/* eslint-disable consistent-return */
import { Controller } from '@/presentation/protocols';

import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  const request = {
    ...(req.body || {}),
    ...(req.params || {}),
  };
  const httpResponse = await controller.handle(request);

  if (httpResponse.statusCode === 404) {
    return res.status(404).send();
  }

  if (httpResponse.statusCode === 302) {
    if (httpResponse.redirect) {
      return res.redirect(httpResponse.statusCode, httpResponse.redirect);
    }
  }

  if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    return res.status(httpResponse.statusCode).json({
      error: httpResponse.body.message,
    });
  }
};
