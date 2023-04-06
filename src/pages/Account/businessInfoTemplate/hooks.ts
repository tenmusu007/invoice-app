import { ApiInstance } from 'helper/ApiInstance';
import { BusinessInfo as BusinessInfoType } from 'types/businessInfo';
import { BillTo as BillToType } from 'types/billTo';
import { BankInfo as BankInfoType } from 'types/bankInfo';
import { BusinessInfo } from 'types/template';
import { useEffect, useState } from 'react';
type Props = {
  template?: BusinessInfo;
};
export const useBusinessTemplateHooks = (templates?: any) => {
  console.log(templates);
  useEffect(() => {
    setTemplate(templates);
  }, []);

  const [template, setTemplate] = useState<any>();
  console.log(template);

  const onSubmitBusinessInfo = async (data: BusinessInfoType) => {
    const res = await ApiInstance({
      method: 'post',
      url: 'account/create_template',
      data: { businessInfo: data },
    });
    if (res.status === 400) return console.error('fail');
  };
  return {
    action: { onSubmitBusinessInfo },
    state: { template },
  };
};
