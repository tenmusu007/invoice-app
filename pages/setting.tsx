import SelectInput from "@components/Select";
import Text from "@components/atoms/Text";
import { useState } from "react";
import translations from "../components/atoms/Text/text.json";

const Setting = () => {
	const textAline = { textAlign: "center" };
	const [defLanguage, setDefLanguage] = useState(["日本語", "English"]);
	const [language, setLanguage] = useState(defLanguage[0]);
	const { setting } = translations.en;
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
			/>
			<SelectInput items={setting.langchoice} name={"language"} />
			<Text variant={"h6"} text={setting.bill} style={textAline} />
			<Text variant={"h6"} text={setting.info} style={textAline} />
		</>
	);
};

export default Setting;
