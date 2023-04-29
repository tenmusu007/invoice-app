import { Types } from 'mongoose';

export type BusinessInfo = {
  businessName?: String;
  addressLine1?: String;
  city?: String;
  province?: String;
  country?: String;
  postalCode?: String;
  phoneNumber?: String;
  email?: String;
  [key: string]: string | any;
};

export type BusinessInfoDB = BusinessInfo & {
  _id: Types.ObjectId;
  userId?: string;
  template: boolean;
  __v: number;
};
