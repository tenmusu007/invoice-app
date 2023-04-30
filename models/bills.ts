import { Schema, model, models } from 'mongoose';

interface BillToSchema {
  userId: string;
  companyName: string;
  address: string;
  city: string;
  province: string;
  country: string;
  postal: string;
  template: boolean;
}
const BillsSchema = new Schema<BillToSchema>({
  userId: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  country: {
    type: String,
  },
  postal: {
    type: String,
  },
  template: {
    type: Boolean,
    default: false,
  },
});
const Bills = models.Bills || model<BillToSchema>('Bills', BillsSchema);
export default Bills;
