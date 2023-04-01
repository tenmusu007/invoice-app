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
    const { bankInfo, billTo, businessInfo } = req.body;
    switch (true) {
      case !!bankInfo:
        const newBanckInfo = await new BankInfo({
          userId: userId,
          bankName: bankInfo.bankInfo.bankName,
          transitNumber: bankInfo.bankInfo.transitNumber,
          branchNumber: bankInfo.bankInfo.branchNumber,
          accountNumber: bankInfo.bankInfo.accountNumber,
          accountType: bankInfo.bankInfo.accountType,
          holderName: bankInfo.bankInfo.accountName,
          template: true,
        });
        await newBanckInfo.save();
        break;
      case !!billTo:
        const newBillTo = await new Bills({
          userId: userId,
          companyName: billTo.billTo.companyName,
          address: billTo.billTo.addressLine1,
          city: billTo.billTo.city,
          province: billTo.billTo.province,
          country: billTo.billTo.country,
          postal: billTo.billTo.postalCode,
          template: true,
        });
        await newBillTo.save();
        break;
      case !!businessInfo:
        const newBusinessInfo = await new BusinessInfo({
          userId: userId,
          name: businessInfo.user.businessName,
          address: businessInfo.user.addressLine1,
          city: businessInfo.user.city,
          province: businessInfo.user.province,
          country: businessInfo.user.country,
          postal: businessInfo.user.postalCode,
          phone: businessInfo.user.phoneNumber,
          email: businessInfo.user.email,
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
