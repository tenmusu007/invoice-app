import { SelectChangeEvent } from '@mui/material';

import router from 'next/router';
import { useContext, useState } from 'react';

import AccountText from './text.json';

import { useModalContext } from 'Context/ModalContext';
import { ApiInstance } from 'helper/ApiInstance';
import { useLocale } from 'helper/useLocale';
import type { TemplateBankInfo } from 'types/bankInfo';
import type { TemplateBillTo } from 'types/billTo';
import type { TemplateBusinessInfo } from 'types/businessInfo';
import type { Templates } from 'types/template';
import type { UserInfo } from 'types/user';

type buttonArr = {
  text: string;
  clickEvent: () => void;
  data: any;
  name: string;
}[];

const textAline = { textAlign: 'center' } as const;
const textStyle = {
  width: '45%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginX: 'auto',
  marginY: '30px',
} as const;

const useAccountHooks = () => {
  const { t } = useLocale(AccountText);
  const [userData, setUserData] = useState<UserInfo>();
  const [userTemplate, setUserTemplate] = useState<Templates>();
  const [businessInfoData, setBusinessInfoData] =
    useState<TemplateBusinessInfo>();
  const [billTooData, setBillToData] = useState<TemplateBillTo>();
  const [bankInfoData, setBankInfoData] = useState<TemplateBankInfo>();
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    openBillToModal,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    openBusinessInfoModal,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    openBankInfoModal,
    handleBillToOpen,
    handleBillToClose,
    handleBusinessInfoOpen,
    handleBusinessInfoClose,
    handleBankInfoOpen,
    handleBankInfoClose,
  } = useContext(useModalContext);
  const templates: buttonArr = [
    {
      name: 'BusinessInfo',
      text: businessInfoData ? `${t.setting.edit}` : `${t.setting.info}`,
      clickEvent: handleBusinessInfoOpen,
      data: userTemplate?.businessInfo,
    },
    {
      name: 'BillTo',
      text: billTooData ? `${t.setting.edit}` : `${t.setting.bill}`,
      clickEvent: handleBillToOpen,
      data: userTemplate?.bills,
    },
    {
      name: 'BankInfo',
      text: bankInfoData ? `${t.setting.edit}` : `${t.setting.bank}`,
      clickEvent: handleBankInfoOpen,
      data: userTemplate?.bankInfo,
    },
  ];
  const handleChangeLanguage = async (event: SelectChangeEvent) => {
    const locale = event.target.value;
    const res = await ApiInstance({
      method: 'post',
      url: 'account/update',
      data: { locale },
    });
    if (res.status !== 200) return;
    // eslint-disable-next-line consistent-return
    return router.push(router.pathname, router.asPath, { locale });
  };
  const handleFetchUserData = async () => {
    const res = await ApiInstance({
      method: 'post',
      url: 'account/user',
    });
    if (res.status !== 200) return;

    setUserData(res.data);
  };
  const handleFetchUserTemplate = async () => {
    const res = await ApiInstance({
      method: 'post',
      url: 'account/get_template',
    });
    if (res.status !== 200) return;

    setUserTemplate(res.data);
  };
  const handleDisplayTemplate = async (event: SelectChangeEvent) => {
    // Absolutely needs to be typed
    const template: any = event.target.value;
    console.log(template);
    if (!template) return;
    if (template === 'create') {
      setBusinessInfoData(undefined);
      setBankInfoData(undefined);
      setBillToData(undefined);
    }
    if (template.name) {
      const formattedTemplate = {
        _id: template._id,
        businessName: template.name,
        addressLine1: template?.address,
        city: template?.city,
        province: template?.province,
        country: template?.country,
        postalCode: template?.postal,
        phoneNumber: template?.phone,
        email: template?.email,
      };
      setBusinessInfoData(formattedTemplate);
    } else if (template.bankName) {
      const formattedTemplate = {
        _id: template._id,
        bankName: template.bankName,
        transitNumber: template.transitNumber,
        branchNumber: template.branchNumber,
        accountNumber: template.accountNumber,
        accountType: template.accountType,
        accountName: template.holderName,
      };
      setBankInfoData(formattedTemplate);
    } else if (template.companyName) {
      const formattedTemplate = {
        _id: template._id,
        companyName: template.companyName,
        addressLine1: template.address,
        city: template.city,
        province: template.province,
        country: template.country,
        postalCode: template.postal,
      };

      setBillToData(formattedTemplate);
    }
  };
  return {
    action: {
      openBillToModal,
      openBusinessInfoModal,
      openBankInfoModal,
      handleBillToClose,
      handleBusinessInfoClose,
      handleBankInfoClose,
      handleChangeLanguage,
      handleFetchUserData,
      handleFetchUserTemplate,
      handleDisplayTemplate,
    },
    state: {
      userData,
      userTemplate,
      templates,
      t,
      openBillToModal,
      openBusinessInfoModal,
      openBankInfoModal,
      businessInfoData,
      billTooData,
      bankInfoData,
    },
    style: { textAline, textStyle },
  };
};

export default useAccountHooks;
