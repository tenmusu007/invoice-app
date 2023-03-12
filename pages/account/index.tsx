import SelectInput from '@src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next/types';
import { useLocale } from 'helper/useLocale';
import ProfileText from './text.json';
import { Box, Grid } from '@mui/material';
import Button from '@src/components/atoms/Button';
import BillToTemplate from '@src/pages/Account/Template/billToTemplate';
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
  const [openBillToModal, setOpenBillToModal] = useState<boolean>(false);
  const handleBillToOpen = () => setOpenBillToModal(true);
  const handleBillToClose = () => setOpenBillToModal(false);

  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Text
            label={'h5'}
            labelText={t.setting.name}
            variant={'body1'}
            text={'Astuya'}
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
          <Text variant={'h6'} text={t.setting.info} style={textAline} />
          <Button
            variant={'outlined'}
            sx={textAline}
            text={t.setting.bill}
            onClick={handleBillToOpen}
          />
          <BillToTemplate
            openModal={openBillToModal}
            setOpenModal={handleBillToClose}
          ></BillToTemplate>
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