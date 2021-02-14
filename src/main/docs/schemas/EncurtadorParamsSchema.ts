export const encurtadorParamsSchema = {
  type: 'object',
  properties: {
    url: {
      type: 'string',
    },
  },
  example: {
    url: 'https://wisereducacao.com/',
  },
  required: ['url'],
};
