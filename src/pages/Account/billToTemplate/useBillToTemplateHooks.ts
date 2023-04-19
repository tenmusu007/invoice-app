import { BillTo as BillToType } from 'types/billTo';
import { BusinessInfo } from 'types/template';
import { useEffect, useState } from 'react';
import { ApiInstance } from 'helper/ApiInstance';
import { useRouter } from 'next/router';
type Props = {
  template: BillToType | undefined;
  getValues: any;
};
export const useBillToTemplateHooks = (props: Props) => {
  const router = useRouter();
  const onSubmitBillTo = async (data: BillToType) => {
    if (!data.companyName) {
      console.log('data is undifined');
    }
    const res = await ApiInstance({
      method: 'post',
      url: 'account/create_template',
      data: { billTo: data },
    });
    if (res.status !== 200) return console.error('fail');
    router.reload();
  };
  const onSubmitEditBillTo = async () => {
    const editTemplate = props?.getValues();
    const formatedEditTemplate = {
      _id: editTemplate._id,
      companyName: editTemplate.companyName,
      address: editTemplate.addressLine1,
      city: editTemplate.city,
      province: editTemplate.province,
      country: editTemplate.country,
      postal: editTemplate.postalCode,
    };
    const res = await ApiInstance({
      method: 'post',
      url: 'account/edit_template',
      data: { billTo: formatedEditTemplate },
    });
    if (res.status !== 200) return console.error('fail');
    router.reload();
  
  };

  return {
    action: { onSubmitBillTo, onSubmitEditBillTo },
    state: {},
  };
};
