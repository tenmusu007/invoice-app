import UserInFo from '@models/account';
import Users from '@models/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function getUserData(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = await getToken({ req });
    const cuurentUser = await Users.find({ accessToken: token?.accessToken });
    const userInfo = await UserInFo.findOne({
      userId: cuurentUser[0]._id.toString(),
    });
    //TODO テンプレートの各idを取ってくる
    res.status(200).json({
      name: cuurentUser[0].name,
      image: cuurentUser[0].image,
      language: userInfo.language,
      businessInfo: [],
      billTo: [],
      bankInfo:[]
    });
  } catch (error) {
    res.status(400).json(error);
  }
}
