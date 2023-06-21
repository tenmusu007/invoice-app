import { useRouter } from 'next/router';

import { FieldValues, UseFormGetValues } from 'react-hook-form';

import ApiInstance from 'helper/ApiInstance';
import type { BankInfo as BankInfoType } from 'types/bankInfo';

type Props = {
  template: BankInfoType | undefined;
  getValues: UseFormGetValues<FieldValues>;
};
const useBankInfoTemplateHooks = (props: Props) => {
  const router = useRouter();

  const onSubmitBankInfo = async (data: BankInfoType) => {
    if (!data.bankInfo.bankName) {
      return;
    }
    const res = await ApiInstance({
      method: 'post',
      url: 'account/create_template',
      data: { bankInfo: data },
    });
    if (res.status !== 200) return;
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
      holderName: editTemplate.bankInfo.holderName,
    };
    const res = await ApiInstance({
      method: 'post',
      url: 'account/edit_template',
      data: { bankInfo: formattedEditTemplate },
    });
    if (res.status !== 200) return;
    router.reload();
  };

  return {
    action: { onSubmitBankInfo, onSubmitEditBankInfo },
    state: {},
  };
};

export default useBankInfoTemplateHooks;
