import type { BankInfo } from './bankInfo';
import type { BillTo } from './billTo';
import type { BusinessInfo } from './businessInfo';
import type { InvoiceInfo } from './invoiceInfo';

export type Invoice = {
  InvoiceInfo: InvoiceInfo;
  BillTo: BillTo | string;
  BusinessInfo: BusinessInfo | string;
  bankInfo?: BankInfo | string;
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
