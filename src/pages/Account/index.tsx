import SelectInput from '@src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import { useContext, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Button from '@src/components/atoms/Button';
import BillToTemplate from '@src/pages/account/Template/billToTemplate';
import BusinessInfoTemplate from '@src/pages/account/Template/businessInfoTemplate';
import BankInfoTemplate from '@src/pages/account/Template/bankInfoTemplate';
import { useModalContext } from 'Context/ModalContext';
import { useAccoountHook } from './hooks';
import { useLocale } from 'helper/useLocale';
import AccountText from './text.json';

type Props = {
  locale: String;
};
const AccountPage = (props: Props) => {
  const { locale } = props;
  const { state, action, style } = useAccoountHook();
  const t = state.t;
  useEffect(() => {
    action.handleFetchUserData();
  }, []);
  return (
    <>
      <Grid container>
        <Grid item alignItems="center" display="flex" md={12} marginY={2}>
          <Grid item md={6}>
            <Text
              variant={'h4'}
              text={t.setting.name}
              style={style.textAline}
            />
          </Grid>
          <Grid item md={6}>
            <Text
              variant={'h4'}
              text={state.userData.name}
              style={style.textAline}
            />
          </Grid>
        </Grid>
        <Grid item alignItems="center" display="flex" md={12} marginY={2}>
          <Grid item md={6}>
            <Text
              variant={'h4'}
              text={t.setting.language}
              style={style.textAline}
            />
          </Grid>
          <Grid item md={6} textAlign={'center'}>
            <SelectInput
              items={t.setting.langchoice}
              name={'language'}
              language={locale}
              handleChangeLanguage={action.handleChangeLanguage}
            />
          </Grid>
        </Grid>
        <Grid item md={12}>
          {state.buttons.map((btn, index) => {
            return (
              <Button
                key={index}
                variant={'outlined'}
                sx={style.textAline}
                text={'btn.text'}
                onClick={btn.clickEvent}
              />
            );
          })}
          <BusinessInfoTemplate
            openModal={state.openBusinessInfoModal}
            setOpenModal={action.handleBusinessInfoClose}
          />
          <BillToTemplate
            openModal={state.openBillToModal}
            setOpenModal={action.handleBillToClose}
          />
          <BankInfoTemplate
            openModal={state.openBankInfoModal}
            setOpenModal={action.handleBankInfoClose}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AccountPage;
