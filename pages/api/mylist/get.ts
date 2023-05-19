import type { NextApiRequest, NextApiResponse } from 'next';

import { getToken } from 'next-auth/jwt';

import Bills from '@models/bills';
import Invoice from '@models/invoice';
import Users from '@models/user';

type InvoiceType = {
  _id: string;
  userId: string;
  invoiceNumber: number;
  issued: string;
  due: string;
  billTo: string;
  businessInfo: string;
  bankInfo: string;
  items: any[];
  total: number;
  subTotal: number;
};
export default async function get(req: NextApiRequest, res: NextApiResponse) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  try {
    const token = await getToken({ req });
    const currentUser = await Users.find({ accessToken: token?.accessToken });
    const userInvocieList = await Invoice.find({
      userId: currentUser[0]._id.toString(),
    });

    const invoiceData = await Promise.all(
      userInvocieList.map(async (invoice: InvoiceType) => {
        const invoiceBillTo = await Bills.findById(invoice?.billTo);
        const formattedBillTo = {
          companyName: invoiceBillTo?.companyName,
        };
        const data = {
          invoiceId: invoice?._id,
          invoiceNumber: invoice?.invoiceNumber,
          issued: invoice?.issued,
          billTo: formattedBillTo,
        };
        return data;
      })
    );

    res.status(200).json(invoiceData);
  } catch (error) {
    res.status(400).json(error);
  }
}
