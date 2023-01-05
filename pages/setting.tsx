import Button from "@components/Button/button";
import Text from "@components/Text";
import translations from "../components/Text/text.json";

const Setting = () => {
	const textAline = { textAlign: "center" };
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
			<Text variant={"h6"} text={setting.bill} style={textAline} />
			<Text variant={"h6"} text={setting.info} style={textAline} />
		</>
	);
};

export default Setting;
