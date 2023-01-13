import { Schema, model, models } from "mongoose";
const InvoiceSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	invocieNumber: {
		type: Number,
		required: true,
	},
	billTo: {
		type: String,
		required: true,
	},
	businessInfo: {
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
