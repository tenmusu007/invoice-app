
import BankInfo from '@models/bankInfo';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Invoice from '@models/invoice';
import Users from '@models/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function getInvoiceData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  try {
    const token = await getToken({ req });
    await Users.find({ accessToken: token?.accessToken });
    const invoiceId = req.body.invoiceId;
    const invoice = await Invoice.findById(invoiceId);

    const invoiceBillTo = await Bills.findById(invoice?.billTo);
    const invoiceBusinessInfo = await BusinessInfo.findById(
      invoice?.businessInfo
    );
    const invoiceBankInfo = await BankInfo.findById(invoice.bankInfo);

    const invoiceData = {
      _id: invoice?._id,
      invoiceNumber: invoice?.invoiceNumber,
      issued: invoice?.issued,
      due: invoice?.due,
      billTo: invoiceBillTo,
      businessInfo: invoiceBusinessInfo,
      bankInfo: invoiceBankInfo,
      item: invoice?.items,
    };
    res.status(200).json(invoiceData);
  } catch (error) {
    res.status(400).json(error);
  }
}
