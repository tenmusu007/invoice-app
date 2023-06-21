import { SelectChangeEvent } from '@mui/material';

import router from 'next/router';
import { useContext, useState } from 'react';

import AccountText from './text.json';

import { useModalContext } from 'Context/ModalContext';
import ApiInstance from 'helper/ApiInstance';
import useLocale from 'helper/useLocale';
import type { TemplateBankInfo } from 'types/bankInfo';
import type { TemplateBillTo } from 'types/billTo';
import type { TemplateBusinessInfo } from 'types/businessInfo';
import type { Templates, BusinessInfo, BankInfo, BillTo } from 'types/template';
import type { UserInfo } from 'types/user';

type buttonArr = {
  text: string;
  clickEvent: () => void;
  data: BusinessInfo[] | BankInfo[] | BillTo[] | undefined;
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
    const selectedTemplate:
      | string
      | TemplateBankInfo
      | TemplateBillTo
      | TemplateBusinessInfo = event.target.value;

    if (!selectedTemplate) return;

    const formatBusinessInfoData = (template: TemplateBusinessInfo) => {
      const { _id, ...rest } = template;

      return {
        _id,
        businessName: rest.businessName,
        address: rest.address,
        city: rest.city,
        province: rest.province,
        country: rest.country,
        postalCode: rest.postalCode,
        phoneNumber: rest.phoneNumber,
        email: rest.email,
      };
    };

    const formatBillToData = (template: TemplateBillTo) => {
      const { _id, ...rest } = template;

      return {
        _id,
        companyName: rest.companyName,
        address: rest.address,
        city: rest.city,
        province: rest.province,
        country: rest.country,
        postalCode: rest.postalCode,
      };
    };

    const formatBankInfoData = (template: TemplateBankInfo) => {
      const { _id, ...rest } = template;

      return {
        _id,
        bankName: rest.bankName,
        transitNumber: rest.transitNumber,
        branchNumber: rest.branchNumber,
        accountNumber: rest.accountNumber,
        accountType: rest.accountType,
        holderName: rest.holderName,
      };
    };

    if (typeof selectedTemplate === 'string') {
      setBusinessInfoData(undefined);
      setBankInfoData(undefined);
      setBillToData(undefined);
    } else if ('name' in selectedTemplate) {
      const template = selectedTemplate as TemplateBusinessInfo;

      setBusinessInfoData(formatBusinessInfoData(template));
    } else if ('bankName' in selectedTemplate) {
      const template = selectedTemplate as TemplateBankInfo;

      setBankInfoData(formatBankInfoData(template));
    } else if ('companyName' in selectedTemplate) {
      const template = selectedTemplate as TemplateBillTo;

      setBillToData(formatBillToData(template));
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
