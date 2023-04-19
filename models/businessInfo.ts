import { Schema, model, models } from 'mongoose';

interface BusinessInfoSchema {
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
}
const BusinessInfoSchema = new Schema<BusinessInfoSchema>({
  userId: {
    type: String,
    required: true,
  },
  name: {
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
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  template: {
    type: Boolean,
    default: false,
  },
});
const BusinessInfo =
  models.BusinessInfo || model<BusinessInfoSchema>('BusinessInfo', BusinessInfoSchema);
export default BusinessInfo;
