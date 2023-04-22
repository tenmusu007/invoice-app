export type BankInfo = {
  _id?: string;
  userid?: string;
  bankName?: string;
  branchNumber?: number;
  accountNumber?: number;
  accountType?: string;
  accountName?: string;
  transitNumber?: number;
  [key: string]: string | any;
};
