import SelectInput from '@src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next/types';
import { useLocale } from 'helper/useLocale';
import ProfileText from './text.json';
import { Box, Grid } from '@mui/material';
import Button from '@src/components/atoms/Button';
import BillToTemplate from '@src/pages/Account/Template/billToTemplate';
import BusinessInfoTemplate from '@src/pages/Account/Template/businessInfoTemplate';
import BankInfoTemplate from '@src/pages/Account/Template/bankInfoTemplate';
import { useModalContext } from 'Context/ModalContext';

const Setting = (props: any) => {
  const { data } = props;
  const router = useRouter();
  const textAline = { textAlign: 'center' } as const;
  const textStyle = {
    width: '45%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginX: 'auto',
    marginY: '30px',
  } as const;
  const [language, setLanguage] = useState('');
  const { t } = useLocale(ProfileText);
  useEffect(() => {
    setSetting(t);
  }, [data, language]);
  const [setting, setSetting] = useState<any>(t);
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

  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Text
            label={'h5'}
            labelText={t.setting.name}
            variant={'body1'}
            text={'Atsuya'}
            style={textStyle}
          />
        </Grid>
        <Grid item md={12}>
          <Text label={'h5'} labelText={t.setting.language} style={textStyle}>
            <SelectInput
              items={t.setting.langchoice}
              name={'language'}
              language={language}
              setLanguage={setLanguage}
            />
          </Text>
        </Grid>
        <Grid item md={12}>
          <Button
            variant={'outlined'}
            sx={textAline}
            text={t.setting.info}
            onClick={handleBusinessInfoOpen}
          />
          <Button
            variant={'outlined'}
            sx={textAline}
            text={t.setting.bill}
            onClick={handleBillToOpen}
          />
          <Button
            variant={'outlined'}
            sx={textAline}
            text={t.setting.bank}
            onClick={handleBankInfoOpen}
          />
          <BusinessInfoTemplate
            openModal={openBusinessInfoModal}
            setOpenModal={handleBusinessInfoClose}
          />
          <BillToTemplate
            openModal={openBillToModal}
            setOpenModal={handleBillToClose}
          />
          <BankInfoTemplate
            openModal={openBankInfoModal}
            setOpenModal={handleBankInfoClose}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Setting;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      data: context.locale,
    },
  };
};
