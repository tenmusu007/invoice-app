import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import connectMopngo from "@db/connectMongo";
import Bills from "@models/bills";
import UsersInfo from "@models/userInfo";
import Users from "@models/users";

export default async function create(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
    await connectMopngo();
    if(!req.body)return res.status(200).json("no data")
		const { email, username } = await req.body;
    const checkUser = await Users.findOne({ email: email });
		if (checkUser) return res.status(200).json(checkUser);
		const newUser = await new Users({
			email: email,
			username: username,
		});
		const user = await newUser.save();

		const newBill = await new Bills({
			user_id: user._id.toString(),
		});
		const newUserInfo = await new UsersInfo({
			user_id: user._id.toString(),
		});
		await newBill.save();
		await newUserInfo.save();
		res.status(200).json(user);
	} catch (error: any) {
		res.status(400).json(error);
	}
}
