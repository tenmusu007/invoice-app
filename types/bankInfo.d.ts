import { Types } from 'mongoose';

export type BankInfo = {
  bankName: string;
  branchNumber: number;
  accountNumber: number;
  accountType: string;
  holderName: string;
  transitNumber: number;
  [key: string]: string | any;
};

export type BankInfoDB = BankInfo & {
  _id: Types.ObjectId;
  userId?: string;
  template: boolean;
  __v: number;
};

export type TemplateBankInfo = BankInfo & {
  _id: Types.ObjectId;
};
