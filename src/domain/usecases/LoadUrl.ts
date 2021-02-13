export interface LoadUrl {
  loadUrl(params: LoadUrl.Params): Promise<LoadUrl.Result>;
}

export namespace LoadUrl {
  export type Params = {
    shortUrl: string;
  };

  export type Result = string | undefined;
}
