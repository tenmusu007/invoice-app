import { Box, Stack } from '@mui/material';
import BusinessInfoForm from '@src/components/molecules/BusinessInfoForm';
import Button from '@src/components/atoms/Button';
import Modal from '@src/components/organisms/Modal';
import { Modal as ModalType } from 'types/modal';
import { BusinessInfo as BusinessInfoType } from 'types/businessInfo';
import { FormProvider, useForm } from 'react-hook-form';
import { useBusinessTemplateHooks } from './hooks';
import { log } from 'console';

const BusinessInfoTemplate = ({
  openModal,
  setOpenModal,
  template,
}: ModalType) => {
  const { action, state } = useBusinessTemplateHooks(template);
  const data = {
    businessName: template?.name || '',
    addressLine1: template?.name || '',
    city: template?.name || '',
    province: template?.name || '',
    country: template?.name || '',
    postalCode: template?.name || '',
    phoneNumber: template?.name || '',
    email: template?.name || '',
  };
  console.log('template',template);

  const methods = useForm({
    defaultValues: {
      businessName: 'test',
      addressLine1: 'test',
      city: 'test',
      province: 'test',
      country: 'test',
      postalCode: 'test',
      phoneNumber: 'test',
      email: 'test',
    },
  });
  const { handleSubmit } = methods;

  const formStyle = {
    background: '#FFF5F5',
    p: 10,
  } as const;

  const buttonStyle = {
    background: '#EEBBC3',
    color: '#232946',
    borderRadius: 2,
    fontWeight: 'bold',
  } as const;

  return (
    <FormProvider {...methods}>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <Stack
          component="form"
          onSubmit={handleSubmit(action.onSubmitBusinessInfo)}
          sx={formStyle}
        >
          <BusinessInfoForm template={template} />
          <Box width={2}>
            <Button text={'Submit'} type="submit" sx={buttonStyle} />
          </Box>
        </Stack>
      </Modal>
    </FormProvider>
  );
};

export default BusinessInfoTemplate;
