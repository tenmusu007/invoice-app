import connectMongo from '@db/connectMongo';
import BankInfo from '@models/bankInfo';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Users from '@models/user';
import { getToken } from 'next-auth/jwt';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function getTemplate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const token = await getToken({ req });
    const currentUser = await Users.find({ accessToken: token?.accessToken });
    const userId = currentUser[0]._id.toString();

    const billsTemplates = await Bills.find({ userId: userId, template: true });
    const bankInfoTemplates = await BankInfo.find({
      userId: userId,
      template: true,
    });
    const businessInfoTemplates = await BusinessInfo.find({
      userId: userId,
      template: true,
    });
    res.status(200).json({
      bills: billsTemplates,
      banckInfo: bankInfoTemplates,
      businessInfo: businessInfoTemplates,
    });
  } catch (error) {
    res.status(400).json(error);
  }
}
