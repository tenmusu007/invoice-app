import connectMongo from '@db/connectMongo';
import Invoice from '@models/invoice';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Users from '@models/user';
import { Invoice as InvoiceType } from 'types/inputValue';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

// Why we cant use arrow function?
export default async function createInvoice(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    console.log('successfully connected');
    // const token = await getToken({ req });
    // const currentUser = await Users.find({ accessToken: token?.accessToken });
    // const currentUserId = await currentUser[0]._id.toString();
    // const invoiceData: InvoiceType = await req.body;
    // const newBillTo = await new Bills({
    //   userId: currentUserId,
    //   companyName: invoiceData.BillTo.companyName,
    //   address: invoiceData.BillTo.addressLine1,
    //   city: invoiceData.BillTo.city,
    //   province: invoiceData.BillTo.province,
    //   country: invoiceData.BillTo.country,
    //   postal: invoiceData.BillTo.postalCode,
    //   template: false,
    // });
    //   await newBillTo.save();
    //   console.log('newBillTo', newBillTo._id.toString());
    // const newInvoice = await new Invoice({
    //   userId: currentUserId,
    //   invoiceNumber: invoiceData.InvoiceInfo.invoiceNumber,
    //   issued: invoiceData.InvoiceInfo.issuedDate,
    //   due: invoiceData.InvoiceInfo.dueDate,
    //   billTo: invoiceData.BillTo,
    //   businessInfo: invoiceData.BusinessInfo,
    //   items: invoiceData.description,
    //   total: invoiceData.total,
    //   subTotal: invoiceData.subTotal,
    // });
    // await newInvoice.save();
    res.status(200).json({ res: 'You nailed it!!' });
  } catch (e) {
    console.log(e);
    res.status(400).json({ res: 'Hell no!!' });
  }
}
