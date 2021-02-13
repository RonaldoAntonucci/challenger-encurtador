export const newUrlMap = (url: string): string => {
  const host = process.env.HOST;
  return `${host}/${url}`;
};
