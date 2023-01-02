import mongoose, { Schema, model, models } from "mongoose";
const BillsSchema = new mongoose.Schema({
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
});
const Bills = model("bill", BillsSchema);
export default Bills;