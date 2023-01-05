import { Schema, model, models } from "mongoose";
const InvoiceSchema = new Schema({
	user_id: {
		type: String,
		required: true,
	},
	number: {
		type: Number,
	},
	bill_to: {
		type: String,
		required: true,
	},
	business_info: {
		type: String,
		required: true,
	},
	issued: {
		type: String,
		required: true,
	},
	due: {
		type: String,
		required: true,
	},
});
const Invoice = models.Invoice || model("Invoice", InvoiceSchema);
export default Invoice;
