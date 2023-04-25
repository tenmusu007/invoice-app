// don't need to deal with headers now.

export type Api = {
  method: string;
  url: string;
  data?: any;
  option?: any;
  header?: {
    'Content-Type': string;
  };
};
