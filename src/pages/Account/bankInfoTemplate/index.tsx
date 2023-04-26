import { Box, Stack } from '@mui/material';
import BankInfoForm from '@src/components/molecules/BankInfoForm';
import Button from '@src/components/atoms/Button';
import Modal from '@src/components/organisms/Modal';
import { BankInfo as BankInfoType } from 'types/bankInfo';
import { FormProvider, useForm } from 'react-hook-form';
import { useBankInfoTemplateHooks } from './useBankInfoTemplateHooks';
import { Dispatch, SetStateAction, useEffect } from 'react';

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  template: BankInfoType | undefined;
};
const BankInfoTemplate = (props: Props) => {
  const { openModal, setOpenModal, template } = props;
  const { register, setValue, getValues } = useForm();
  const templateSet = {
    template: template,
    getValues: getValues,
  };
  const { action, state } = useBankInfoTemplateHooks(templateSet);

  useEffect(() => {
    if (template) {
      Object.keys(template).forEach((key) => {
        setValue(`bankInfo.${key}`, template[key]);
      });
    }
  }, [template]);
  const methods = useForm<BankInfoType>({
    defaultValues: {
      bankInfo: {
        bankName: template?.bankName,
        transitNumber: template?.transitNumber,
        branchNumber: template?.branchNumber,
        accountNumber: template?.accountNumber,
        accountType: template?.accountType,
        accountName: template?.accountName,
      },
    },
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        contents={
          <Stack
            component="form"
            onSubmit={handleSubmit(action.onSubmitBankInfo)}
            sx={formStyle}
          >
            <BankInfoForm defRegister={template ? register : ''} />
            <Box width={2}>
              {template ? (
                <Button
                  text={'edit'}
                  type="button"
                  sx={buttonStyle}
                  onClick={action.onSubmitEditBankInfo}
                />
              ) : (
                <Button text={'Submit'} type="submit" sx={buttonStyle} />
              )}
            </Box>
          </Stack>
        }
      />
    </FormProvider>
  );
};

export default BankInfoTemplate;

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
