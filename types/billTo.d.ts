export type BillTo = {
  _id?: string;
  userid?: string;
  companyName?: String;
  addressLine1?: String;
  city?: String;
  province?: String;
  country?: String;
  postalCode?: String;
  [key: string]: string | any;
};
