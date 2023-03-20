import { Schema, model, models } from 'mongoose';
const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required:true
  },
  accessToken: {
    type: String,
    required: true,
  },
});
const Users = models.Users || model('Users', UsersSchema);
export default Users;
