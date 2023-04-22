import connectMongo from '@db/connectMongo';
import BankInfo from '@models/bankInfo';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Users from '@models/user';
import { getToken } from 'next-auth/jwt';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function editTemplate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const token = await getToken({ req });
    const cuurentUser = await Users.find({ accessToken: token?.accessToken });
    const { bankInfo, billTo, businessInfo } = req.body;

    switch (true) {
      case !!bankInfo:
        const editBankInfoTemplate = await BankInfo.findById(bankInfo._id);
        if (!editBankInfoTemplate)
          return res.status(200).json({ result: 'template is empty' });
        const updateBankInfo = await editBankInfoTemplate.updateOne({
          $set: {
            bankName: bankInfo.bankName,
            transitNumber: bankInfo.transitNumber,
            branchNumber: bankInfo.branchNumber,
            accountNumber: bankInfo.accountNumber,
            accountType: bankInfo.accountType,
            holderName: bankInfo.accountName,
          },
        });
        break;
      case !!billTo:
        const editBillToTemplate = await Bills.findById(billTo._id);
        if (!editBillToTemplate)
          return res.status(200).json({ result: 'template is empty' });
        const updateBillTo = await editBillToTemplate.updateOne({
          $set: {
            companyName: billTo.companyName,
            address: billTo.addressLine1,
            city: billTo.city,
            province: billTo.province,
            country: billTo.country,
            postal: billTo.postalCode,
          },
        });
        break;
      case !!businessInfo:
        const editBusinessInfoTemplate = await BusinessInfo.findById(
          businessInfo._id
        );
        if (!editBusinessInfoTemplate)
          return res.status(200).json({ result: 'template is empty' });
        const updateBusinessInfo = await editBusinessInfoTemplate.updateOne({
          $set: {
            name: businessInfo.name,
            address: businessInfo.address,
            city: businessInfo.city,
            province: businessInfo.province,
            country: businessInfo.country,
            postal: businessInfo.postalCode,
            phone: businessInfo.phone,
            email: businessInfo.email,
          },
        });
        break;
      default:
        break;
    }
    res.status(200).json({ result: 'success' });
  } catch (error) {
    res.status(400).json({ result: error });
  }
}