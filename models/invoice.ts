import { Schema, model, models } from "mongoose";
const InvoiceSchema = new Schema({
	user_id: {
		type: String,
		required: true,
  },
  number: {
    type:Number
  },
	bill: {
		type: String,
		required: true,
	},
	userinfo: {
		type: String,
		required: true,
  },
  issued: {
    type:String
  },
  due: {
    type:String
  }
   
});
const Invoice = models.Invoice || model("Invoice", InvoiceSchema);
export default Invoice;
