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
    const currentUser = await Users.find({ accessToken: token?.accessToken });
    const userId = currentUser[0]._id.toString();
    if (!req.body) return res.status(200).json({ result: 'template is empty' });
    const { bankInfo, billTo, businessInfo } = await req.body;
    let newBanckInfo = null;
    let newBillTo = null;
    let newBusinessInfo = null;
    switch (true) {
      case !!bankInfo:
        newBanckInfo = await new BankInfo({
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
        newBillTo = await new Bills({
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
        newBusinessInfo = await new BusinessInfo({
          userId: userId,
          name: businessInfo.businessInfo.businessName,
          address: businessInfo.businessInfo.addressLine1,
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
