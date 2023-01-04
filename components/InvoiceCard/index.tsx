import Text from "@components/Text";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
const InvoiceCard = (props:any) => {
	const TextStyle = { textAlign: "center", marginY: 2 };
	const { no, compnay_name, date } = props.list;
	return (
		<Card sx={{ width: 150, height: 180 }}>
			<CardContent>
				<Text text={`No${no}`} variant={"body1"} style={TextStyle} />
				<Text text={compnay_name} variant={"body1"} style={TextStyle} />
				<Text text={date} variant={"body1"} style={TextStyle} />
			</CardContent>
		</Card>
	);
};

export default InvoiceCard;
