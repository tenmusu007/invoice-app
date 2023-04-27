import connectMongo from '@db/connectMongo';
import BankInfo from '@models/bankInfo';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Invoice from '@models/invoice';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Invoice as InvoiceType } from 'types/inputValue';

export default async function getInvoice(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    // Needs to be got typed (extend with each type and add useId and _id)
    //Those console.log are for debugging
    const id = await req.body.invoiceId;
    const invoice = await Invoice.findById(id);
    // console.log('invoice', invoice);
    const billTo = await Bills.findById(invoice?.billTo);
    // console.log('billTo', billTo);
    const businessInfo = await BusinessInfo.findById(invoice?.businessInfo);
    // console.log('businessInfo', businessInfo);
    const bankInfo = await BankInfo.findById(invoice?.bankInfo);
    // console.log('bankInfo', bankInfo);

    // Reshape the invoice
    // Need a specific type for this, extend with InvoiceType
    const formattedInvoice = {
      id: invoice._id,
      invoiceNumber: invoice.invoiceNumber,
      issuedDate: invoice.issued,
      dueDate: invoice.due,
      billTo: {
        id: billTo._id,
        companyName: billTo.companyName,
        address: billTo.address,
        city: billTo.city,
        province: billTo.province,
        country: billTo.country,
        postal: billTo.postal,
      },
      businessInfo: {
        id: businessInfo._id,
        name: businessInfo.name,
        address: businessInfo.address,
        city: businessInfo.city,
        province: businessInfo.province,
        country: businessInfo.country,
        postal: businessInfo.postal,
        phone: businessInfo.phone,
        email: businessInfo.email,
      },
      bankInfo: {
        id: bankInfo._id,
        bankName: bankInfo.bankName,
        transitNumber: bankInfo.transitNumber,
        branchNumber: bankInfo.branchNumber,
        accountNumber: bankInfo.accountNumber,
        accountType: bankInfo.accountType,
        holderName: bankInfo.holderName,
      },
      items: invoice.items.map((item: { name: any; quantity: any; unitPrice: any; tax: any; amount: any; }) => ({
        name: item.name,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        tax: item.tax,
        amount: item.amount,
      })),
      subTotal: invoice.subTotal,
      total: invoice.total
    };
    // send the formatted invoice
    // Success
    res.status(200).json(formattedInvoice);
  } catch (error) {
    console.log('error', error);
    res.status(400).json(error);
  }
}
