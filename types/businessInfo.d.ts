export type BusinessInfo = {
  _id?: string
  userid?:string
  businessName?: String;
  addressLine1?: String;
  city?: String;
  province?: String;
  country?: String;
  postalCode?: String;
  phoneNumber?: String;
  email?: String;
  [key: string]: string |any;
};
