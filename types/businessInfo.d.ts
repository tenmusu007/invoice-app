import { Types } from 'mongoose';

export type BusinessInfo = {
  businessName?: string;
  addressLine1?: string;
  city?: string;
  province?: string;
  country?: string;
  postalCode?: string;
  phoneNumber?: string;
  email?: string;
  [key: string]: string | any;
};

export type BusinessInfoDB = BusinessInfo & {
  _id: Types.ObjectId;
  userId?: string;
  template: boolean;
  __v: number;
};
