import Text from "@components/Text";
import translations from "../components/Text/text.json";

const Setting = () => {
	const { setting } = translations.en;
	return (
		<>
			<Text
				label={"h5"}
				labelText={setting.name}
				variant={"body1"}
				text={"Astuya"}
			/>
      <Text label={"h5"} labelText={setting.language} />
      <Text variant={'h6'} text={setting.bill} />
      <Text variant={'h6'} text={setting.info} />
		</>
	);
};

export default Setting;
