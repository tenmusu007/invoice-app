import SelectInput from '@src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import { useContext, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Button from '@src/components/atoms/Button';
import BillToTemplate from '@src/pages/account/Template/billToTemplate';
import BusinessInfoTemplate from '@src/pages/account/businessInfoTemplate';
import BankInfoTemplate from '@src/pages/account/Template/bankInfoTemplate';
import { useModalContext } from 'Context/ModalContext';
import { useAccountHooks } from './hooks';
import { useLocale } from 'helper/useLocale';
import AccountText from './text.json';

type Props = {
  locale: String;
};
const AccountPage = (props: Props) => {
  const { locale } = props;
  const { state, action, style } = useAccountHooks();
  const t = state.t;
  useEffect(() => {
    action.handleFetchUserData();
    action.handleFetchUserTemplate();
  }, []);
  console.log(state.templates);

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
              onChange={action.handleChangeLanguage}
            />
          </Grid>
        </Grid>

        <Grid item alignItems="center" display="flex" md={12}>
          <BusinessInfoTemplate
            openModal={state.openBusinessInfoModal}
            setOpenModal={action.handleBusinessInfoClose}
            template={state.businessInfoData}
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
        {/* <Grid item alignItems="center" display="flex" md={12}>
          <Grid item textAlign={'center'} md={4}>
            <SelectInput
              template={state.userTemplate.bills}
              name={'BillTo'}
              onChange={action.handleDisplayTemplate}
            />
          </Grid>
          <Grid item textAlign={'center'} md={4}>
            <SelectInput
              template={state.userTemplate.banckInfo}
              name={'BanckInfo'}
            />
          </Grid>
          <Grid item textAlign={'center'} md={4}>
            <SelectInput
              template={state.userTemplate.businessInfo}
              name={'BusinessInfo'}
            />
          </Grid>
        </Grid> */}
        <Grid item alignItems="center" display="flex" md={12}>
          {state.templates.map((template, index) => {
            return (
              <>
                <Grid item textAlign={'center'} md={4}>
                  <SelectInput
                    template={template.data}
                    name={template.name}
                    onChange={action.handleDisplayTemplate}
                  />
                  <Button
                    key={index}
                    variant={'outlined'}
                    sx={style.textAline}
                    text={template.text}
                    onClick={template.clickEvent}
                  />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default AccountPage;
