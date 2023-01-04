import { Schema, model, models } from "mongoose";
const BillsSchema = new Schema({
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
});
const Bills = models.Bills || model("Bills", BillsSchema);
export default Bills;