import { Box, Stack } from '@mui/material';
import BusinessInfoForm from '@src/components/Molecules/businessInfoForm';
import Button from '@src/components/atoms/Button';
import Modal from '@src/components/organisms/Modal';
import { Modal as ModalType } from 'types/modal';
import { BusinessInfo as BusinessInfoType } from 'types/businessInfo';
import { FormProvider, useForm } from 'react-hook-form';
import { useTemplateHooks } from './hooks';

const BusinessInfoTemplate = ({ openModal, setOpenModal }: ModalType) => {
  const {action, state} = useTemplateHooks()

  const methods = useForm();
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
          <BusinessInfoForm />
          <Box width={2}>
            <Button text={'Submit'} type="submit" sx={buttonStyle} />
          </Box>
        </Stack>
      </Modal>
    </FormProvider>
  );
};

export default BusinessInfoTemplate;
