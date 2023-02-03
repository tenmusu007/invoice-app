export type Description = {
  name?: string;

  description?: {
    name: string;
    quantity: number;
    unitPrice: number;
    tax: number;
    amount: number;
  }[];
};
