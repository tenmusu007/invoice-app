import { BusinessInfo as BusinessInfoType } from 'types/businessInfo';
import { BusinessInfo } from 'types/template';
import { useEffect, useState } from 'react';
import { ApiInstance } from 'helper/ApiInstance';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
type Props = {
  template: BusinessInfoType | undefined;
  getValues: any;
};
export const useBusinessTemplateHooks = (props?: Props) => {
  const router = useRouter();
  const onSubmitBusinessInfo = async (data: BusinessInfoType) => {
    if (!data.businessName) {
      return console.log('data is undifined');
    }
    const res = await ApiInstance({
      method: 'post',
      url: 'account/create_template',
      data: { businessInfo: data },
    });
    if (res.status !== 200) return console.error('fail');
    router.reload();
  };
  const onSubmitEditBusinessInfo = async () => {
    const editTemplate = props?.getValues();
    const formatedEditTemplate = {
      _id: editTemplate._id,
      name: editTemplate.businessName,
      address: editTemplate.addressLine1,
      city: editTemplate.city,
      province: editTemplate.province,
      country: editTemplate.country,
      postal: editTemplate.postalCode,
      phone: editTemplate.phoneNumber,
      email: editTemplate.email,
    };
    const res = await ApiInstance({
      method: 'post',
      url: 'account/edit_template',
      data: { businessInfo: formatedEditTemplate },
    });
    if (res.status !== 200) return console.error('fail');
    router.reload();
  };

  return {
    action: { onSubmitBusinessInfo, onSubmitEditBusinessInfo },
    state: {},
  };
};
