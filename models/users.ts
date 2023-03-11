import { Schema, model, models } from 'mongoose';
const UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  invoice: {
    type: Array,
  },
  billTo: {
    type: Array,
  },
  businessInfo: {
    type: Array,
  },
  language: {
    type: String,
    default: 'en',
  },
});
const Users = models.Users || model('Users', UsersSchema);
export default Users;
