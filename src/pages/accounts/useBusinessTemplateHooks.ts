import { useRouter } from 'next/router';

import { FieldValues, UseFormGetValues } from 'react-hook-form';

import ApiInstance from 'helper/ApiInstance';
import type { BusinessInfo as BusinessInfoType } from 'types/businessInfo';

type Props = {
  template: BusinessInfoType | undefined;
  getValues: UseFormGetValues<FieldValues>;
};
const useBusinessTemplateHooks = (props: Props) => {
  const router = useRouter();
  // eslint-disable-next-line consistent-return
  const onSubmitBusinessInfo = async (data: BusinessInfoType) => {
    if (!data.businessInfo.businessName) {
      return console.log('data is undefined');
    }
    const res = await ApiInstance({
      method: 'post',
      url: 'account/create_template',
      data: { businessInfo: data },
    });
    if (res.status !== 200) return console.error('fail');
    router.reload();
  };
  // eslint-disable-next-line consistent-return
  const onSubmitEditBusinessInfo = async () => {
    const editTemplate = props?.getValues();

    const formattedEditTemplate = {
      _id: editTemplate.businessInfo._id,
      name: editTemplate.businessInfo.businessName,
      address: editTemplate.businessInfo.address,
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

export default useBusinessTemplateHooks;
