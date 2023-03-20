import { Schema, model, models } from 'mongoose';
const BusinessInfoSchema = new Schema({
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
    default:false
  }
});
const BusinessInfo =
  models.BusinessInfo || model('BusinessInfo', BusinessInfoSchema);
export default BusinessInfo;
