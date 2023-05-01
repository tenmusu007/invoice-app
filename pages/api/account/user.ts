import type { NextApiRequest, NextApiResponse } from 'next';

import { getToken } from 'next-auth/jwt';

import connectMongo from '@db/connectMongo';
import UserInFo from '@models/account';
import BankInfo from '@models/bankInfo';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Users from '@models/user';

export default async function getUserData(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await connectMongo();
    const token = await getToken({ req });
    const currentUser = await Users.find({ accessToken: token?.accessToken });
    const userInfo = await UserInFo.findOne({
      userId: currentUser[0]._id.toString(),
    });
    const businessInfo = [];
    const billTo = [];
    const bankInfo = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const i of userInfo.businessInfo) {
      // eslint-disable-next-line no-await-in-loop
      const temp = await BusinessInfo.findById(userInfo.businessInfo[i]);
      businessInfo.push(temp);
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const i of userInfo.billTo) {
      // eslint-disable-next-line no-await-in-loop
      const temp = await Bills.findById(userInfo.billTo[i]);
      billTo.push(temp);
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const i of userInfo.bankInfo) {
      // eslint-disable-next-line no-await-in-loop
      const temp = await BankInfo.findById(userInfo.bankInfo[i]);
      bankInfo.push(temp);
    }
    // TODO テンプレートの各idを取ってくる
    res.status(200).json({
      name: currentUser[0].name,
      image: currentUser[0].image,
      language: userInfo.language,
    });
  } catch (error) {
    res.status(400).json(error);
  }
}
