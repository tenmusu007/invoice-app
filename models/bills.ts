import { Schema, model, models } from "mongoose";
const BillsSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	compnayName: {
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
});
const Bills = models.Bills || model("Bills", BillsSchema);
export default Bills;