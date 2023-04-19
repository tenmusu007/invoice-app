export type BusinessInfo = {
  _id: string;
  userId: string;
  name: string;
  address: string;
  city: string;
  province: string;
  country: string;
  postal: string;
  phone: string;
  email: string;
  template: boolean;
  __v: number;
};
export type BankInfo = {
  _id: string;
  userId: string;
  bankName: string;
  transitNumber: number;
  branchNumber: number;
  accountNumber: number;
  accountType: string;
  holderName: string;
  template: boolean;
  __v: 0;
};
export type BillTo = {
  _id: string;
  userId: string;
  companyName: string;
  address: string;
  city: string;
  province: string;
  country: string;
  postal: string;
  template: boolean;
  __v: 0;
};

export type Templates = {
  businessInfo: BusinessInfoType[];
  bills: BillToType[];
  banckInfo: BankInfoType[];
};
