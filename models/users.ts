import { Schema, model, models } from "mongoose"
const UsersSchema = new Schema({
  email: {
    type: String,
  },
  username: {
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
  }
})
const Users = models.Users || model("Users", UsersSchema);
export default Users