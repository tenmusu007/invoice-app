import { Types } from 'mongoose';

export type BillTo = {
  companyName?: String;
  addressLine1?: String;
  city?: String;
  province?: String;
  country?: String;
  postalCode?: String;
  [key: string]: string | any;
};

export type BillToDB = BillTo & {
  _id: Types.ObjectId;
  userId?: string;
  template: boolean;
  __v: number;
};
