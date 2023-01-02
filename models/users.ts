import mongoose, { Schema, model, models } from "mongoose"
const UsersSchema = new Schema({
  Email: {
    type: String,
    required: true,
  },
  Username: {
    type: String,
    required: true,
  },
  Bill_To: {
    type: Array,
  },
  User_Info: {
    type:Array
  }
})
const Users = model("users", UsersSchema);
export default Users