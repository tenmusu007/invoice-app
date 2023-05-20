import { useRouter } from 'next/router';

import { FieldValues, UseFormGetValues } from 'react-hook-form';

import { ApiInstance } from 'helper/ApiInstance';
import type { BillTo as BillToType } from 'types/billTo';

type Props = {
  template: BillToType | undefined;
  getValues: UseFormGetValues<FieldValues>;
};
const useBillToTemplateHooks = (props: Props) => {
  const router = useRouter();
  // eslint-disable-next-line consistent-return
  const onSubmitBillTo = async (data: BillToType) => {
    if (!data.billTo.companyName) {
      console.log('data is undefined');
    }
    const res = await ApiInstance({
      method: 'post',
      url: 'account/create_template',
      data: { billTo: data },
    });
    if (res.status !== 200) return console.error('fail');
    router.reload();
  };
  // eslint-disable-next-line consistent-return
  const onSubmitEditBillTo = async () => {
    const editTemplate = props?.getValues();
    const formattedEditTemplate = {
      _id: editTemplate.billTo._id,
      companyName: editTemplate.billTo.companyName,
      address: editTemplate.billTo.addressLine1,
      city: editTemplate.billTo.city,
      province: editTemplate.billTo.province,
      country: editTemplate.billTo.country,
      postal: editTemplate.billTo.postalCode,
    };
    const res = await ApiInstance({
      method: 'post',
      url: 'account/edit_template',
      data: { billTo: formattedEditTemplate },
    });
    if (res.status !== 200) return console.error('fail');

    router.reload();
  };

  return {
    action: { onSubmitBillTo, onSubmitEditBillTo },
    state: {},
  };
};

export default useBillToTemplateHooks;
