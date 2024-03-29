import type { NextApiRequest, NextApiResponse } from 'next';

import { getToken } from 'next-auth/jwt';

import connectMongo from '@db/connectMongo';
import BankInfo from '@models/bankInfo';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Users from '@models/user';

// eslint-disable-next-line consistent-return
export default async function createTemplate(
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
    if (!req.body) return res.status(200).json({ result: 'template is empty' });
    const { bankInfo, billTo, businessInfo } = await req.body;
    let newBankInfo = null;
    let newBillTo = null;
    let newBusinessInfo = null;
    switch (true) {
      case !!bankInfo:
        newBankInfo = await new BankInfo({
          userId,
          bankName: bankInfo.bankInfo.bankName,
          transitNumber: bankInfo.bankInfo.transitNumber,
          branchNumber: bankInfo.bankInfo.branchNumber,
          accountNumber: bankInfo.bankInfo.accountNumber,
          accountType: bankInfo.bankInfo.accountType,
          holderName: bankInfo.bankInfo.holderName,
          template: true,
        });
        await newBankInfo.save();
        break;
      case !!billTo:
        newBillTo = await new Bills({
          userId,
          companyName: billTo.billTo.companyName,
          address: billTo.billTo.address,
          city: billTo.billTo.city,
          province: billTo.billTo.province,
          country: billTo.billTo.country,
          postal: billTo.billTo.postalCode,
          template: true,
        });
        await newBillTo.save();
        break;
      case !!businessInfo:
        newBusinessInfo = await new BusinessInfo({
          userId,
          name: businessInfo.businessInfo.businessName,
          address: businessInfo.businessInfo.address,
          city: businessInfo.businessInfo.city,
          province: businessInfo.businessInfo.province,
          country: businessInfo.businessInfo.country,
          postal: businessInfo.businessInfo.postalCode,
          phone: businessInfo.businessInfo.phoneNumber,
          email: businessInfo.businessInfo.email,
          template: true,
        });
        await newBusinessInfo.save();
        break;
      default:
        break;
    }
    res.status(200).json({ result: 'template success' });
  } catch (error) {
    res.status(400).json({ error });
  }
}
