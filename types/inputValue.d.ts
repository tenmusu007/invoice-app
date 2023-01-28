import { InvoiceInfo } from "./invoiceInfo";
import { Description } from "./description";
import { BusinessInfo } from "./businessInfo";
import { BillTo } from "./billTo";

export type Invoice = {
  //後で？は全部消す
    InvoiceInfo?: InvoiceInfo;
    BillTo?: BillTo;
    BusinessInfo?: BusinessInfo;

    name?: string;
    // item?: String;
    description?: {
      name: string;
      quantity: number;
      unitPrice: number;
      tax: number;
      amount: number;
    }[];
}