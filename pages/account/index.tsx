import SelectInput from '@src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next/types';
import { useLocale } from 'helper/useLocale';
import ProfileText from './text.json';
import { Box, Grid } from '@mui/material';
import Button from '@src/components/atoms/Button';
import Modal from '@src/components/organisms/Modal';
import BillToTemplate from '@src/pages/Account/Template/billToTemplate';
import BillToForm from '@src/components/Molecules/billToForm';
import { FormProvider, useForm } from 'react-hook-form';
const Setting = (props: any) => {
  const { data } = props;
  const router = useRouter();
  const textAline = { textAlign: 'center' };
  const [language, setLanguage] = useState('');
  const { t } = useLocale(ProfileText);
  useEffect(() => {
    setSetting(t);
  }, [data, language]);
  const [setting, setSetting] = useState<any>(t);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Text
            label={'h5'}
            labelText={t.setting.name}
            variant={'body1'}
            text={'Astuya'}
            style={{
              width: '45%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginX: 'auto',
              marginY: '30px',
            }}
          />
        </Grid>
        <Grid item md={12}>
          <Text
            label={'h5'}
            labelText={t.setting.language}
            style={{
              width: '45%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginX: 'auto',
              marginY: '30px',
            }}
          >
            <SelectInput
              items={t.setting.langchoice}
              name={'language'}
              language={language}
              setLanguage={setLanguage}
            />
          </Text>
        </Grid>
        <Grid item md={12}>
          <Text variant={'h6'} text={t.setting.bill} style={textAline} />
          <Text variant={'h6'} text={t.setting.info} style={textAline} />
          {/* <FormProvider {...methods}>
            <Button text={'Bill to'} onClick={handleOpen} />
            <Modal openModal={openModal} setOpenModal={handleClose}>
              <BillToForm />
              <Box width={2}>
                <Button
                  text={'Submit'}
                  type="submit"
                  sx={{
                    background: '#EEBBC3',
                    color: '#232946',
                    borderRadius: 2,
                    fontWeight: 'bold',
                  }}
                />
              </Box>
            </Modal>
          </FormProvider> */}
          <Button text={'Bill to'} onClick={handleOpen} />
          <BillToTemplate openModal={openModal} setOpenModal={handleClose} ></BillToTemplate>
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
