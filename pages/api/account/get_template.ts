import { NextApiRequest, NextApiResponse } from 'next/types';
import { getToken } from 'next-auth/jwt';

import connectMongo from '@db/connectMongo';
import BankInfo from '@models/bankInfo';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Users from '@models/user';

export default async function getTemplate(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await connectMongo();
    const token = await getToken({
      req,
      secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    });
    const currentUser = await Users.find({ accessToken: token?.accessToken });
    const userId = currentUser[0]._id.toString();

    const billsTemplates = await Bills.find({ userId, template: true });
    const bankInfoTemplates = await BankInfo.find({
      userId,
      template: true,
    });
    const businessInfoTemplates = await BusinessInfo.find({
      userId,
      template: true,
    });
    res.status(200).json({
      bills: billsTemplates,
      bankInfo: bankInfoTemplates,
      businessInfo: businessInfoTemplates,
    });
  } catch (error) {
    res.status(400).json(error);
  }
}
