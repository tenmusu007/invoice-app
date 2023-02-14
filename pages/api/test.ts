// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../db/connectMongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    res.status(200).json("success");
  } catch (error: any) {
    res.status(400).json(error);
  }
}
