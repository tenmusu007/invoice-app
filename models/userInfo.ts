import mongoose, { Schema, model, models } from "mongoose";
const UserInfoSchema = new mongoose.Schema({
	user_id: {
		type: String,
		required: true,
	},
	compnay_name: {
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
	postal: {
		type: String,
	},
	phone: {
		type: String,
	},
	email: {
		type: String,
	},
});
const UsersInfo = models.UsersInfo || model("UsersInfo", UserInfoSchema);
export default UsersInfo;
