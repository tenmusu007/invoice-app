import { Schema, model, models } from 'mongoose';
const BankInfoSchema = new Schema({
  bankName: {
    type: String,
  },
  transitNumber: {
    type: Number,
  },
  branchNumber: {
    type: Number,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  holderName: {
    type: String,
    required: true,
  },
  template: {
    type: Boolean,
    default: false,
  },
});
const BankInfo = models.BankInfo || model('BankInfo', BankInfoSchema);
export default BankInfo;
