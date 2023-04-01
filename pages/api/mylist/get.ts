import UserInFo from '@models/account';
import Users from '@models/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  try {
    const token = await getToken({ req });
    const cuurentUser = await Users.find({ accessToken: token?.accessToken });
    const userInvocieList = await UserInFo.findOne({
      userId: cuurentUser[0]._id.toString(),
    });
    res.status(200).json(userInvocieList.invoice);
  } catch (error) {
    res.status(400).json(error);
  }
}
