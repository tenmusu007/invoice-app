import { Types } from 'mongoose';

import { BillTo } from './billTo';
import { BusinessInfo } from './businessInfo';

import { InvoiceInfo } from './invoiceInfo';

export type Items = {
  name: string;
  quantity: string;
  unitPrice: string;
  tax: string;
  amount: number;
}[];

export type InvoiceData = {
  _id: string;
  invoiceNumber: number;
  issued: string;
  due: string;
  billTo: BillTo;
  businessInfo: BusinessInfo;
  bankInfo: BusinessInfo | null;
  item: items;
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
