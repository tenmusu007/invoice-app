import connectMongo from '@db/connectMongo';
import Invoice from '@models/invoice';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function getInvoice(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const id = await req.body.invoiceId;
    const invoice = await Invoice.findById(id);
    console.log('invoice', invoice);
    res.status(200).json(invoice);
  } catch (error) {
    console.log('error', error);
    res.status(400).json(error);
  }
}
