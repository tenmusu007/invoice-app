// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import connectMopngo from "../../db/connectMongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMopngo();
    res.status(200).json("success");
  } catch (error: any) {
    res.status(400).json(error);
  }
}
