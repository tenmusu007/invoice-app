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
    if (!data.businessInfo.businessName) {
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
    const formattedEditTemplate = {
      _id: editTemplate.businessInfo._id,
      name: editTemplate.businessInfo.businessName,
      address: editTemplate.businessInfo.addressLine1,
      city: editTemplate.businessInfo.city,
      province: editTemplate.businessInfo.province,
      country: editTemplate.businessInfo.country,
      postal: editTemplate.businessInfo.postalCode,
      phone: editTemplate.businessInfo.phoneNumber,
      email: editTemplate.businessInfo.email,
    };

    const res = await ApiInstance({
      method: 'post',
      url: 'account/edit_template',
      data: { businessInfo: formattedEditTemplate },
    });
    if (res.status !== 200) return console.error('fail');
    router.reload();
  };

  return {
    action: { onSubmitBusinessInfo, onSubmitEditBusinessInfo },
    state: {},
  };
};
