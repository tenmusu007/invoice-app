import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@db/connectMongo';
import Users from '@models/user';
import UserInFo from '@models/account';
import { getToken } from 'next-auth/jwt';

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    if (!req.body) return res.status(200).json('no data');
    const token = await getToken({ req });
    const { email, name, image } = await req.body.user;
    const { accessToken } = await req.body;

    const checkUser = await Users.findOne({ email: email });
    if (checkUser) {
      const updateUser = await checkUser.updateOne({
        $set: {
          accessToken: token?.accessToken,
        },
      });
      return res.status(200).json(checkUser);
    }
    const newUser = await new Users({
      name: name,
      email: email,
      image: image,
      accessToken: accessToken,
    });

    const user = await newUser.save();
    const userId = String(user._id);

    const newAccount = await new UserInFo({
      userId: userId,
    });
    await newAccount.save();

    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json(error);
  }
}
