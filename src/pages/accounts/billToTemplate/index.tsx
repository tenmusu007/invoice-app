import { Box, Stack } from '@mui/material';

import { Dispatch, SetStateAction, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import useBillToTemplateHooks from './useBillToTemplateHooks';

import Button from '@src/components/atoms/Button';
import BillToForm from '@src/components/molecules/BillToForm';
import Modal from '@src/components/organisms/Modal';
import type { BillTo as BillToType } from 'types/billTo';

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  template: BillToType | undefined;
};

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

const BillToTemplate = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { openModal, setOpenModal, template } = props;

  const { register, setValue, getValues } = useForm();
  const templateSet = {
    template,
    getValues,
  };
  const { action } = useBillToTemplateHooks(templateSet);
  useEffect(() => {
    if (template) {
      Object.keys(template).forEach((key) => {
        setValue(`billTo.${key}`, template[key]);
      });
    }
  }, [setValue, template]);

  const methods = useForm<BillToType>({
    defaultValues: {
      billTo: {
        companyName: template?.companyName,
        addressLine1: template?.addressLine1,
        city: template?.city,
        province: template?.province,
        country: template?.country,
        postalCode: template?.postalCode,
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
            onSubmit={handleSubmit(action.onSubmitBillTo)}
            sx={formStyle}
          >
            <BillToForm defRegister={template ? register : ''} />

            <Box width={2}>
              {template ? (
                <Button
                  text={'edit'}
                  type="button"
                  sx={buttonStyle}
                  onClick={action.onSubmitEditBillTo}
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

export default BillToTemplate;
