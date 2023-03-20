import React, { useContext, useReducer } from 'react';
import { Box, Stack } from '@mui/material';
import Button from '@src/components/atoms/Button';
import Modal from '@src/components/organisms/Modal';
import BankInfoForm from '@src/components/molecules/BankInfoForm';
import BusinessInfoForm from '@src/components/molecules/BusinessInfoForm';
import BillToForm from '@src/components/molecules/BillToForm';
import { BusinessInfo as BusinessInfoType } from 'types/businessInfo';
import { BankInfo as BankInfoType } from 'types/bankInfo';
import { BillTo as BillToType } from 'types/billTo';
import { Modal as ModalType } from 'types/modal';
import { Action as ActionType } from 'Context/ModalContext';
import { FormProvider, useForm } from 'react-hook-form';
import { useModalContext } from 'Context/ModalContext';
import { modalReducer, initialState } from 'Context/ModalContext';

type Data = BusinessInfoType | BankInfoType | BillToType;

const TemplateModal = ({ openModal, setOpenModal }: ModalType) => {
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
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const onSubmit = async (data: Data) => {
    console.log('Template data', data);
  };
  const methods = useForm();
  const { handleSubmit } = methods;

  // type Modal = typeof openBillToModal | typeof openBankInfoModal | typeof openBusinessInfoModal

  const pickModal = (action: ActionType) => {
    switch (action.type) {
      case 'OPEN_BILL_TO_MODAL':
        return <BillToForm />;
      case 'OPEN_BUSINESS_INFO_MODAL':
        return <BusinessInfoForm />;
      case 'OPEN_BANK_INFO_MODAL':
        return <BankInfoForm />;
    }
  };

  //Did not work cuz openModal props only accepts boolean not true
  // const pickModal = ({ openModal, setOpenModal }: ModalType) => {
  //   if (openBillToModal && !openBankInfoModal && !openBusinessInfoModal) {
  //     return <BillToForm openModal={openBillToModal}
  //     setOpenModal={handleBillToClose} />
  //   } else if (openBankInfoModal && !openBillToModal && !openBusinessInfoModal) {
  //     return <BankInfoForm openModal={openBankInfoModal}
  //     setOpenModal={handleBankInfoClose} />
  //   } else {
  //     return <BusinessInfoForm openModal={openBusinessInfoModal}
  //     setOpenModal={handleBusinessInfoClose}  />
  //   }
  // }

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
          onSubmit={handleSubmit(onSubmit)}
          sx={formStyle}
        >
          <Box width={2}>
            <Button text={'Submit'} type="submit" sx={buttonStyle} />
          </Box>
        </Stack>
      </Modal>
    </FormProvider>
  );
};

export default TemplateModal;
