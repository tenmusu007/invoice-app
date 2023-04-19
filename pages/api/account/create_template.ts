import connectMongo from '@db/connectMongo';
import BankInfo from '@models/bankInfo';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Users from '@models/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function createTemplate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const token = await getToken({ req });
    const cuurentUser = await Users.find({ accessToken: token?.accessToken });
    const userId = cuurentUser[0]._id.toString();
    if (!req.body)return res.status(200).json({ result: 'template is empty' });
    const { bankInfo, billTo, businessInfo } = req.body;

    switch (true) {
      case !!bankInfo:
        const newBanckInfo = await new BankInfo({
          userId: userId,
          bankName: bankInfo.bankName,
          transitNumber: bankInfo.transitNumber,
          branchNumber: bankInfo.branchNumber,
          accountNumber: bankInfo.accountNumber,
          accountType: bankInfo.accountType,
          holderName: bankInfo.accountName,
          template: true,
        });
        await newBanckInfo.save();
        break;
      case !!billTo:
        const newBillTo = await new Bills({
          userId: userId,
          companyName: billTo.companyName,
          address: billTo.addressLine1,
          city: billTo.city,
          province: billTo.province,
          country: billTo.country,
          postal: billTo.postalCode,
          template: true,
        });
        await newBillTo.save();
        break;
      case !!businessInfo:
        const newBusinessInfo = await new BusinessInfo({
          userId: userId,
          name: businessInfo.businessName,
          address: businessInfo.addressLine1,
          city: businessInfo.city,
          province: businessInfo.province,
          country: businessInfo.country,
          postal: businessInfo.postalCode,
          phone: businessInfo.phoneNumber,
          email: businessInfo.email,
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
