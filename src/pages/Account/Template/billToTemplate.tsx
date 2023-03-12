import { Box, Stack } from '@mui/material';
import BillToForm from '@src/components/Molecules/billToForm';
import Button from '@src/components/atoms/Button';
import Modal from 'components/Modal';
import { Modal as ModalType } from 'types/modal';
import { BillTo as BillToType } from 'types/billTo';
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form';

const BillToTemplate = ({ openModal, setOpenModal }: ModalType) => {
  const onSubmit = async (data: BillToType) => {
    console.log('Bill to template', data);
  };

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const formStyle = {
    background: '#FFF5F5',
    p: 6,
  } as const;

  return (
    <FormProvider {...methods}>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <Stack
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={formStyle}
        >
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
        </Stack>
      </Modal>
    </FormProvider>
  );
};

export default BillToTemplate;
