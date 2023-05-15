import { Schema, model, models } from 'mongoose';

// Needs to be applied to the invoice
// interface InvoiceSchemaType {
//   userId: string;
//   invoiceNumber: number;
//   issued: string;
//   due: string;
//   billTo: string;
//   businessInfo: string;
//   bankInfo: string;
//   items: Array<any>;
//   total: number;
//   subTotal: number;
// }

const InvoiceSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  invoiceNumber: {
    type: Number,
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
  billTo: {
    type: String,
    required: true,
  },
  businessInfo: {
    type: String,
    required: true,
  },
  bankInfo: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
});
const Invoice =
  models.Invoice || model('Invoice', InvoiceSchema);
export default Invoice;
