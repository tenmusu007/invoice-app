import { Schema, model, models } from "mongoose";
const ItemSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	invoiceId: {
		type: String,
	},
	name: {
		type: String,
	},
	quantity: {
		type: Number,
		reqired: true,
	},
	unitPric: {
		type: Number,
		required: true,
	},
	tax: {
		type: Number,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
});
const Item = models.Item || model("Item", ItemSchema);
export default Item;
