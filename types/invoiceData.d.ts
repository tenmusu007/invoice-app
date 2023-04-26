import { BillTo } from "./billTo";
import { BusinessInfo } from "./businessInfo";

export type invoiceData = {
  _id: string;
  invoiceNumber: number;
  issued: string;
  due: string;
  billTo: BillTo;
  businessInfo: BusinessInfo;
  bankInfo: BusinessInfo | null;
  item: any[];

};
