import { Schema, model, models } from 'mongoose';

const InvoiceSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  invoiceId: {
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
const Invoice = models.Invoice || model('Invoice', InvoiceSchema);
export default Invoice;
