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
export const useAccoountHook = () => {
  const { t } = useLocale(AccountText);
  const [userData, setUserData] = useState<any>('');
  console.log(userData);

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

  const handleChangeLanguage = async (event: SelectChangeEvent) => {
    const locale = event.target.value;
    const res = await ApiInstance({
      method: 'post',
      url: 'account/update',
      data: { locale: locale },
    });
    setUserData(res);

    return router.push(router.pathname, router.asPath, { locale });
  };
  const handleFetchUserData = async () => {
    const res = await ApiInstance({
      method: 'post',
      url: 'account/user',
    });
    // console.log(res);
    setUserData(res);
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
    },
    state: {
      userData,
      buttons,
      t,
      openBillToModal,
      openBusinessInfoModal,
      openBankInfoModal,
    },
    style: { textAline, textStyle },
  };
};
