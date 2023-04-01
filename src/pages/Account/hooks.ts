import { SelectChangeEvent } from '@mui/material';
import { useModalContext } from 'Context/ModalContext';
import { ApiInstance } from 'helper/ApiInstance';
import { useLocale } from 'helper/useLocale';
import router from 'next/router';
import { useContext, useState } from 'react';
import AccountText from './text.json';

type buttonArr = {
  text: string;
  clickEvent: () => void;
}[];
export const useAccountHooks = () => {
  const { t } = useLocale(AccountText);
  const [userData, setUserData] = useState<any>('');
  const [userTemplate, setUserTemplate] = useState<any>([]);
  const [progress, setProgress] = useState(0);
  const textAline = { textAlign: 'center' } as const;
  const textStyle = {
    width: '45%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginX: 'auto',
    marginY: '30px',
  } as const;
  const {
    openBillToModal,
    openBusinessInfoModal,
    openBankInfoModal,
    handleBillToOpen,
    handleBillToClose,
    handleBusinessInfoOpen,
    handleBusinessInfoClose,
    handleBankInfoOpen,
    handleBankInfoClose,
  } = useContext(useModalContext);
  const buttons: buttonArr = [
    {
      text: `${t.setting.info}`,
      clickEvent: handleBusinessInfoOpen,
    },
    {
      text: `${t.setting.bill}`,
      clickEvent: handleBillToOpen,
    },
    {
      text: `${t.setting.bank}`,
      clickEvent: handleBankInfoOpen,
    },
  ];
  // const handleProgress = (progressEvent:any) => {
  //   const { loaded, total } = progressEvent;
  //   setProgress(Math.round((loaded * 100) / total));
  // };
  // const handleChangeLanguage = async (event: SelectChangeEvent) => {
  //   const locale = event.target.value;
  //   const res = await ApiInstance({
  //     method: 'post',
  //     url: 'account/update',
  //     data: { locale: locale },
  //     option: {
  //       onDownloadProgress: handleProgress,
  //     },
  //   });
  //   console.log(res);
    
  //   setUserData(res.data);

  //   return router.push(router.pathname, router.asPath, { locale });
  // };
  const handleChangeLanguage = async (event: SelectChangeEvent) => {
    const locale = event.target.value;
    const res = await ApiInstance({
      method: 'post',
      url: 'account/update',
      data: { locale: locale },
    });
    setUserData(res.data);

    return router.push(router.pathname, router.asPath, { locale });
  };
  const handleFetchUserData = async () => {
    const res = await ApiInstance({
      method: 'post',
      url: 'account/user',
    });
    setUserData(res.data);
  };
  const handleFetchUserTemplate = async () => {
    const res = await ApiInstance({
      method: 'post',
      url: 'account/get_template',
    });
    setUserTemplate(res.data);
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
    },
    state: {
      userData,
      userTemplate,
      buttons,
      t,
      openBillToModal,
      openBusinessInfoModal,
      openBankInfoModal,
    },
    style: { textAline, textStyle },
  };
};
