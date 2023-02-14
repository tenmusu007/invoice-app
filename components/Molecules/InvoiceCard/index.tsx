import Link from "@components/atoms/Link";
import Text from "@components/atoms/Text";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
const InvoiceCard = (props: any) => {
  const TextStyle = { textAlign: "center", marginY: 2 };
  const { businessInfo, invocieNumber, issued } = props.list;
  return (
    <Link path={`/invoice/${encodeURIComponent(invocieNumber as string)}`}>
      <Card sx={{ width: 150, height: 180 }}>
        <CardContent>
          <Text
            text={`No${invocieNumber}`}
            variant={"body1"}
            style={TextStyle}
          />
          <Text
            text={businessInfo.companyName}
            variant={"body1"}
            style={TextStyle}
          />
          <Text text={issued} variant={"body1"} style={TextStyle} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default InvoiceCard;
