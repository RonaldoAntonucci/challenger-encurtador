import { Url } from '.';

export interface ShortUrl {
  id: string;
  shortUrl: string;
  updatedAt: string;
  createdAt: string;
  url: Url;
}
