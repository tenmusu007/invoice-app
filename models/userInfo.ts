import mongoose, { Schema, model, models } from "mongoose";
const UserInfoSchema = new mongoose.Schema({
	User_Id: {
		type: String,
		required: true,
	},
	Compnay_Name: {
		type: String,
	},
	Address: {
		type: String,
	},
	City: {
		type: String,
	},
	Province: {
		type: String,
	},
	Postal: {
		type: String,
	},
	Phone: {
		type: String,
	},
	Email: {
		type: String,
	},
});
const UsersInfo = model("userinfo", UserInfoSchema);
export default UsersInfo;
