import { Schema, model, models } from "mongoose"
const UsersSchema = new Schema({
  email: {
    type: String,
  },
  userName: {
    type: String,
  },
  image: {
    type:String
  },
  invoice: {
    type:Array
  },
  bill_To: {
    type: Array,
  },
  user_Info: {
    type:Array
  },
  language: {
    type:String
  }
})
const Users = models.Users || model("Users", UsersSchema);
export default Users