import { BankInfo as BankInfoType } from 'types/bankInfo';
import { BusinessInfo } from 'types/template';
import { useEffect, useState } from 'react';
import { ApiInstance } from 'helper/ApiInstance';
import { useRouter } from 'next/router';
type Props = {
  template: BankInfoType | undefined;
  getValues: any;
};
export const useBankInfoTemplateHooks = (props: Props) => {
  const router = useRouter();

  const onSubmitBankInfo = async (data: BankInfoType) => {
    if (!data.bankInfo.bankName) {
      return console.log('data is undifined');
    }
    const res = await ApiInstance({
      method: 'post',
      url: 'account/create_template',
      data: { bankInfo: data },
    });
    if (res.status !== 200) return console.error('fail');
    router.reload();
  };
  const onSubmitEditBankInfo = async () => {
    const editTemplate = props?.getValues();
    const formattedEditTemplate = {
      _id: editTemplate.bankInfo._id,
      bankName: editTemplate.bankInfo.bankName,
      transitNumber: editTemplate.bankInfo.transitNumber,
      branchNumber: editTemplate.bankInfo.branchNumber,
      accountNumber: editTemplate.bankInfo.accountNumber,
      accountType: editTemplate.bankInfo.accountType,
      holderName: editTemplate.bankInfo.accountName,
    };
    const res = await ApiInstance({
      method: 'post',
      url: 'account/edit_template',
      data: { bankInfo: formattedEditTemplate },
    });
    if (res.status !== 200) return console.error('fail');
    router.reload();
  };

  return {
    action: { onSubmitBankInfo, onSubmitEditBankInfo },
    state: {},
  };
};
