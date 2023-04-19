import SelectInput from '@src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import Button from '@src/components/atoms/Button';
import BillToTemplate from '@src/pages/account/billToTemplate';
import BusinessInfoTemplate from '@src/pages/account/businessInfoTemplate';
import BankInfoTemplate from '@src/pages/account/bankInfoTemplate';
import { useAccountHooks } from './useAccountHooks';

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
          {state.templates.map((template, index) => {
            return (
              <>
                <Grid item textAlign={'center'} md={4}>
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
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default AccountPage;
