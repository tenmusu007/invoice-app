import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@db/connectMongo";
import Users from "@models/users";

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    if (!req.body) return res.status(200).json("no data");
    const { email, username, image } = await req.body;
    const checkUser = await Users.findOne({ email: email });
    if (checkUser) return res.status(200).json(checkUser);
    const newUser = await new Users({
      email: email,
      username: username,
      image: image,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json(error);
  }
}
