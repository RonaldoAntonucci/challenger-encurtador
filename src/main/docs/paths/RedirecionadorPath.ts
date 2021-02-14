export const redirecionadorPath = {
  get: {
    tags: ['Redirecionador'],
    summary: 'API que redireciona para a URL correta a partir de uma shortUrl',
    parameters: [
      {
        in: 'path',
        name: 'shortUrl',
        description: 'short url referente a url original',
        required: true,
        schema: {
          type: 'string',
        },
        example: '78b1c620',
      },
    ],
    responses: {
      302: {
        description: 'redirecionamento',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};
