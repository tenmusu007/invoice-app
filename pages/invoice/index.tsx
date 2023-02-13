import React from "react";
import {
	SubmitHandler,
	useForm,
	UseFormRegisterReturn,
	Validate,
	ValidationRule,
	FormProvider,
} from "react-hook-form";
import Button from "@components/Button";
import { Box, Stack } from "@mui/material";
import BillToForm from "@components/Molecules/billToForm";
import BusinessInfoForm from "@components/Molecules/businessInfoForm";
import DescriptionForm from "@components/Molecules/descriptionForm";
import InfoForm from "@components/Molecules/infoForm";
import { Invoice as InvoiceType } from "types/inputValue";
import BankInfoForm from "@components/Molecules/bankInfoForm";
import PageTitle from "@components/atoms/Title";
import BoxLayout from "@components/atoms/Box";

const InvoiceForm = () => {
	const methods = useForm<InvoiceType>({
		defaultValues: {
			// name: "",
			description: [{ name: "", quantity: 0, unitPrice: 0, tax: 0, amount: 0 }],
		},
	});
	const { handleSubmit, reset } = methods;

	const onSubmit: SubmitHandler<InvoiceType> = async (data: InvoiceType) => {
		console.log(`Submit`, data);
		//Cannot get total and subTotal because reset method works.
		// await reset();
	};
	return (
    <FormProvider {...methods}>
      {/* <BoxLayout> */}
				<PageTitle content='INVOICE' variant='h2' component='h2' />
				<Stack component='form' onSubmit={handleSubmit(onSubmit)} spacing={2}>
					<InfoForm />
					<Stack direction='row' spacing={2}>
						<BillToForm />
						<BusinessInfoForm />
					</Stack>
					<DescriptionForm />
					<BankInfoForm />
					<Box width={2}>
						<Button
							text={"Submit"}
							type='submit'
							sx={{
								background: "#EEBBC3",
								color: "#232946",
								borderRadius: 2,
								fontWeight: "bold",
							}}
						/>
					</Box>
				</Stack>
		{/* </BoxLayout> */}
			</FormProvider>
	);
};

export default InvoiceForm;
