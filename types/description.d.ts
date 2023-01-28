export type Description = {
  name?: string;
  // item?: String;
  items?: {
    name: string;
    quantity: number;
    unitPrice: number;
    tax: number;
    amount: number;
  }[];
  // quantity?: number;
  // unitPrice?: number;
  // tax?: number;
  // amount?: number;
};
