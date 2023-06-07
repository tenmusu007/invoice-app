import type { NextApiRequest, NextApiResponse } from 'next';

import { JWT, getToken } from 'next-auth/jwt';

import connectMongo from '@db/connectMongo';
import BankInfo from '@models/bankInfo';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Invoice from '@models/invoice';
import Users from '@models/user';

// Make sure we delete all the console.log
export default async function createInvoice(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await connectMongo();
    const token: JWT | null = await getToken({
      req,
      secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    });
    const currentUser = await Users.find({ accessToken: token?.accessToken });
    const currentUserId: string = await currentUser[0]._id.toString();
    // As soon as fixed the property of invoice user to businessInfo, give InvoiceType to invoiceData
    const invoiceData = await req.body.invoice;

    // Bill to
    const newBillTo = await new Bills({
      userId: currentUserId,
      companyName: invoiceData.billTo.companyName,
      address: invoiceData.billTo.address,
      city: invoiceData.billTo.city,
      province: invoiceData.billTo.province,
      country: invoiceData.billTo.country,
      postal: invoiceData.billTo.postalCode,
      template: false,
    });
    await newBillTo.save();
    const billToId: string = newBillTo._id.toString();

    // Business Info
    const newBusinessInfo = await new BusinessInfo({
      userId: currentUserId,
      name: invoiceData.businessInfo.businessName,
      address: invoiceData.businessInfo.address,
      city: invoiceData.businessInfo.city,
      province: invoiceData.businessInfo.province,
      country: invoiceData.businessInfo.country,
      postal: invoiceData.businessInfo.postalCode,
      phone: invoiceData.businessInfo.phoneNumber,
      email: invoiceData.businessInfo.email,
      template: false,
    });
    await newBusinessInfo.save();
    const businessInfoId: string = newBusinessInfo._id.toString();

    // Bank Info
    const bankInfo = await new BankInfo({
      userId: currentUserId,
      bankName: invoiceData.bankInfo.bankName,
      transitNumber: invoiceData.bankInfo.transitNumber,
      branchNumber: invoiceData.bankInfo.branchNumber,
      accountNumber: invoiceData.bankInfo.accountNumber,
      accountType: invoiceData.bankInfo.accountType,
      holderName: invoiceData.bankInfo.holderName,
      template: false,
    });

    await bankInfo.save();
    const bankInfoId: string = bankInfo._id.toString();

    const newInvoice = await new Invoice({
      userId: currentUserId,
      invoiceNumber: invoiceData.info.invoiceNumber,
      issued: invoiceData.info.issuedDate,
      due: invoiceData.info.dueDate,
      billTo: billToId,
      businessInfo: businessInfoId,
      bankInfo: bankInfoId,
      items: invoiceData.description,
      total: invoiceData.total,
      subTotal: invoiceData.subTotal,
    });

    await newInvoice.save();
    res.status(200).json({
      res: 'Your Invoice is successfully created.',
      data: newInvoice._id.toString(),
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log(e.message);
    res.status(400).json({ res: 'Something went wrong. Please try it again' });
  }
}
