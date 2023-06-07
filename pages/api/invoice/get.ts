import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@db/connectMongo';
import BankInfo from '@models/bankInfo';
import Bills from '@models/bills';
import BusinessInfo from '@models/businessInfo';
import Invoice from '@models/invoice';
import type { BankInfoDB } from 'types/bankInfo';
import type { BillToDB } from 'types/billTo';
import type { BusinessInfoDB } from 'types/businessInfo';
import type { InvoiceDataDB, Item } from 'types/invoiceData';

export default async function getInvoice(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await connectMongo();
    // Needs to be got typed (extend with each type and add useId and _id)
    const id: string = await req.body.invoiceId;
    const invoice: InvoiceDataDB = await Invoice.findById(id);
    if (invoice === null) return;
    const billTo: BillToDB =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      invoice && (await Bills.findById(invoice.billTo))!;
    const businessInfo: BusinessInfoDB =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      invoice && (await BusinessInfo.findById(invoice?.businessInfo))!;
    const bankInfo: BankInfoDB =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      invoice && (await BankInfo.findById(invoice?.bankInfo))!;

    // Reshape the invoice
    // Need a specific type for this, extend with InvoiceType
    const formattedInvoice = {
      id: invoice._id,
      invoiceNumber: invoice.invoiceNumber,
      issuedDate: invoice.issued,
      dueDate: invoice.due,
      billTo: {
        id: billTo._id,
        companyName: billTo.companyName,
        address: billTo.address,
        city: billTo.city,
        province: billTo.province,
        country: billTo.country,
        postal: billTo.postal,
      },
      businessInfo: {
        id: businessInfo._id,
        name: businessInfo.name,
        address: businessInfo.address,
        city: businessInfo.city,
        province: businessInfo.province,
        country: businessInfo.country,
        postal: businessInfo.postal,
        phone: businessInfo.phone,
        email: businessInfo.email,
      },
      bankInfo: {
        id: bankInfo._id,
        bankName: bankInfo.bankName,
        transitNumber: bankInfo.transitNumber,
        branchNumber: bankInfo.branchNumber,
        accountNumber: bankInfo.accountNumber,
        accountType: bankInfo.accountType,
        holderName: bankInfo.holderName,
      },
      items: invoice.items.map((item: Item) => ({
        name: item.name,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        tax: item.tax,
        amount: item.amount,
      })),
      subTotal: invoice.subTotal,
      total: invoice.total,
    };

    res.status(200).json(formattedInvoice);
  } catch (error) {
    res.status(400).json(error);
  }
}
