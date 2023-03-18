import { Schema, model, models } from 'mongoose';
const AccountSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  invoice: {
    type: Array,
    default: [],
  },
  businessInfo: {
    type: Array,
    default: [],
  },
  billTo: {
    type: Array,
    default: [],
  },
  bankInfo: {
    type: Array,
    default: [],
  },
  language: {
    type: String,
    default: 'en',
  },
});
const UserInFo = models.UserInFo || model('UserInFo', AccountSchema);
export default UserInFo;
