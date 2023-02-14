import { InvoiceInfo } from './invoiceInfo';
import { Description } from './description';
import { BusinessInfo } from './businessInfo';
import { BillTo } from './billTo';

export type Invoice = {
  InvoiceInfo: InvoiceInfo;
  BillTo: BillTo;
  BusinessInfo: BusinessInfo;

  // name: string;

  description: {
    name: string;
    quantity: number;
    unitPrice: number;
    tax: number;
    amount: number;
  }[];
  subTotal: number;
  total: number;
  condition: string;
};
