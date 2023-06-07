import { Grid } from '@mui/material';
import { useEffect } from 'react';

import useAccountHooks from './useAccountHooks';

import Button from '@src/components/atoms/Button';
import SelectInput from '@src/components/atoms/Select';
import BankInfoTemplate from '@src/pages/accounts/bankInfoTemplate';
import BillToTemplate from '@src/pages/accounts/billToTemplate';
import BusinessInfoTemplate from '@src/pages/accounts/businessInfoTemplate';
import Text from 'src/components/atoms/Text';

type Props = {
  locale: string;
};
const AccountPage = (props: Props) => {
  const { locale } = props;
  const { state, action, style } = useAccountHooks();
  const { t } = state;
  useEffect(() => {
    action.handleFetchUserData();
    action.handleFetchUserTemplate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              text={state.userData?.name}
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
            template={state.billTooData}
          />
          <BankInfoTemplate
            openModal={state.openBankInfoModal}
            setOpenModal={action.handleBankInfoClose}
            template={state.bankInfoData}
          />
        </Grid>
        <Grid item alignItems="center" display="flex" md={12}>
          {/* // TODO: Refactor this to separate component */}
          {state.templates.map((template, index) => (
            <>
              <Grid item textAlign={'center'} md={4} key={index}>
                <Grid item md={12}>
                  <SelectInput
                    template={template.data}
                    name={template.name}
                    onChange={action.handleDisplayTemplate}
                  />
                </Grid>
                <Grid item md={12}>
                  <Button
                    key={index}
                    variant={'outlined'}
                    sx={style.textAline}
                    text={template.text}
                    onClick={template.clickEvent}
                  />
                </Grid>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default AccountPage;
