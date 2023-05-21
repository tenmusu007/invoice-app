import { Types } from 'mongoose';

import type { BillTo } from './billTo';
import type { BusinessInfo } from './businessInfo';

import type { InvoiceInfo } from './invoiceInfo';

import type { Unpacked } from './utility';

export type Items = {
  name: string;
  quantity: string;
  unitPrice: string;
  tax: string;
  amount: number;
}[];

export type Item = Unpacked<Items>;

export type InvoiceData = {
  _id: string;
  invoiceNumber: number;
  issued: string;
  due: string;
  billTo: BillTo;
  businessInfo: BusinessInfo;
  bankInfo: BusinessInfo | null;
  item: Items;
};

export type InvoiceDataDB =
  | (InvoiceInfo & {
      _id: Types.ObjectId;
      userId: string;
      billTo: string;
      businessInfo: string;
      bankInfo: string;
      items: Items;
      total: number;
      subTotal: number;
      __v: number;
    })
  | null;

export type MyInvoice = {
  invoiceNumber: string;
  issued: string;
  billTo: { companyName: string };
  invoiceId: string;
};

export type MyInvoiceCard = {
  invoiceNumber: string;
  issued: string;
  billTo: { companyName: string };
  invoiceId: string;
};
