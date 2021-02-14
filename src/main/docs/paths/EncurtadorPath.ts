export const encurtadorPath = {
  post: {
    tags: ['Encurtar'],
    summary: 'API para encurtar uma url fornecida',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/encurtadorParams',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'apllication/json': {
            schema: {
              $ref: '#/schemas/newUrl',
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};
