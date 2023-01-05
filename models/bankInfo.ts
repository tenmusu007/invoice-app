import { Schema, model, models } from "mongoose";
const BankInfoSchema = new Schema({
	bank_name: {
		type: String,
	},
	transit_number: {
		type: Number,
	},
	branch_number: {
		type: Number,
		required: true,
	},
	account_number: {
		type: Number,
		required: true,
	},
	account_type: {
		type: String,
		required: true,
	},
	account_name: {
		type: String,
		required: true,
	},
});
const BankInfo = models.BankInfo || model("BankInfo", BankInfoSchema);
export default BankInfo;
