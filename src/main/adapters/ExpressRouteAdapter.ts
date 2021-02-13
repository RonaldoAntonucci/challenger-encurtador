import { Controller } from '@/presentation/protocols';

import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => async (
  req: Request,
  res: Response,
) => {
  const request = {
    ...(req.body || {}),
    ...(req.params || {}),
  };
  const httpResponse = await controller.handle(request);

  if (httpResponse.statusCode === 404) {
    res.status(404).send();
  }

  if (httpResponse.statusCode === 302) {
    if (httpResponse.redirect) {
      res.redirect(httpResponse.redirect);
    }
  }

  if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    res.status(httpResponse.statusCode).json({
      error: httpResponse.body.message,
    });
  }
};
