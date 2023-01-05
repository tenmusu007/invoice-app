import { Schema, model, models } from "mongoose";
const BusinessInfoSchema = new Schema({
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
const BusinessInfo =
	models.BusinessInfo || model("BusinessInfo", BusinessInfoSchema);
export default BusinessInfo;
