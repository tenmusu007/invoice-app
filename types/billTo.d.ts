import { Types } from 'mongoose';

export type BillTo = {
  companyName?: string;
  addressLine1?: string;
  city?: string;
  province?: string;
  country?: string;
  postalCode?: string;
  [key: string]: string | any;
};

export type BillToDB = BillTo & {
  _id: Types.ObjectId;
  userId?: string;
  template: boolean;
  __v: number;
};
