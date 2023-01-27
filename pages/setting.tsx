import SelectInput from "@components/Select";
import Text from "@components/atoms/Text";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import { useLocale } from "helper/useLocale";

const Setting = (props: any) => {
	const { data } = props;
	const router = useRouter();
	const textAline = { textAlign: "center" };
	const [language, setLanguage] = useState("");
	const Locale = useLocale();
	const { t } = useLocale();
	useEffect(() => {
		setSetting(t);
	}, [Locale.t, data, language]);
	const [setting, setSetting] = useState<any>(t);

	return (
		<>
			<Text
				label={"h5"}
				labelText={setting.name}
				variant={"body1"}
				text={"Astuya"}
				style={{
					width: "45%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginX: "auto",
					marginY: "30px",
				}}
			/>
			<Text
				label={"h5"}
				labelText={setting.language}
				style={{
					width: "45%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginX: "auto",
					marginY: "30px",
				}}
			>
				<SelectInput
					items={setting.langchoice}
					name={"language"}
					language={language}
					setLanguage={setLanguage}
				/>
			</Text>
			<Text variant={"h6"} text={setting.bill} style={textAline} />
			<Text variant={"h6"} text={setting.info} style={textAline} />
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
