import { Box, Stack } from '@mui/material';
import BusinessInfoForm from '@src/components/molecules/BusinessInfoForm';
import Button from '@src/components/atoms/Button';
import Modal from '@src/components/organisms/Modal';
import { Modal as ModalType } from 'types/modal';
import { BusinessInfo as BusinessInfoType } from 'types/businessInfo';
import { FormProvider, useForm } from 'react-hook-form';
import { useBusinessTemplateHooks } from './useBusinessTemplateHooks';
import { Dispatch, SetStateAction, useEffect } from 'react';
import Input from '@src/components/atoms/Input';
type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  template: any | undefined;
};
const BusinessInfoTemplate = (props: Props) => {
  const { openModal, setOpenModal, template } = props;

  const { register, setValue, getValues } = useForm();
  const templateSet = {
    template: template,
    getValues: getValues,
  };
  const { action } = useBusinessTemplateHooks(templateSet);
  useEffect(() => {
    if (template) {
      Object.keys(template).forEach((key) => {
        setValue(`businessInfo.${key}`, template[key]);
      });
    }
  }, [template]);
  const methods = useForm<BusinessInfoType>({
    defaultValues: {
      businessInfo: {
        businessName: template?.name,
        addressLine1: template?.address,
        city: template?.city,
        province: template?.province,
        country: template?.country,
        postalCode: template?.postal,
        phoneNumber: template?.phone,
        email: template?.email,
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
            onSubmit={handleSubmit(action.onSubmitBusinessInfo)}
            sx={formStyle}
          >
            <BusinessInfoForm defRegister={template ? register : ''} />
            <Box width={2}>
              {template ? (
                <Button
                  text={'edit'}
                  type="button"
                  sx={buttonStyle}
                  onClick={action.onSubmitEditBusinessInfo}
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

export default BusinessInfoTemplate;
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
