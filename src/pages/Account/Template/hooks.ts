import { ApiInstance } from 'helper/ApiInstance';
import { BusinessInfo as BusinessInfoType } from 'types/businessInfo';
import { BillTo as BillToType } from 'types/billTo';
import { BankInfo as BankInfoType } from 'types/bankInfo';

export const useTemplateHooks = () => {
  const onSubmitBusinessInfo = async (data: BusinessInfoType) => {
    const res = await ApiInstance({
      method: 'post',
      url: 'account/create_template',
      data: { businessInfo: data },
    });
    if(res.status === 400) return console.error('fail')
  };
  const onSubmitBankInfo = async (data: BankInfoType) => {
    const res = await ApiInstance({
      method: 'post',
      url: 'account/create_template',
      data: { bankInfo: data },
    });
    if (res.status === 400) return console.error('fail');
  };
  const onSubmitBillTo = async (data: BillToType) => {
    const res = await ApiInstance({
      method: 'post',
      url: 'account/create_template',
      data: { billTo: data },
    });
    if (res.status === 400) return console.error('fail');

  };
  return {
    action: { onSubmitBusinessInfo, onSubmitBankInfo, onSubmitBillTo },
    state: {},
  };
};
