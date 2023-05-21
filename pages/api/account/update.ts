import type { NextApiRequest, NextApiResponse } from 'next';

import { getToken } from 'next-auth/jwt';

import UserInFo from '@models/account';
import Users from '@models/user';

export default async function update(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = await getToken({
      req,
      secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    });
    const { locale } = await req.body;
    const currentUser = await Users.find({ accessToken: token?.accessToken });
    const userInfo = await UserInFo.findOne({
      userId: currentUser[0]._id.toString(),
    });
    const updateUser = await userInfo.updateOne({
      $set: {
        language: locale,
      },
    });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json(error);
  }
}
