import { InvoiceInfo } from './invoiceInfo';
import { Description } from './description';
import { BusinessInfo } from './businessInfo';
import { BillTo } from './billTo';
import { BankInfo } from './bankInfo';

export type Invoice = {
  InvoiceInfo: InvoiceInfo;
  BillTo: BillTo;
  BusinessInfo: BusinessInfo;
  bankInfo?: BankInfo;
  description: {
    name: string;
    quantity: number;
    unitPrice: number;
    tax: number;
    amount: number;
  }[];
  subTotal: number | string;
  total: number | string;
  condition: string;
};
