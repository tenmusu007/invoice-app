import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Link from 'src/components/atoms/Link';
import Text from 'src/components/atoms/Text';

const InvoiceCard = (props: any) => {
  const TextStyle = { textAlign: 'center', marginY: 2 };
  const { businessInfo, invocieNumber, issued } = props.list;
  return (
    // <Link path={`/mylist/${encodeURIComponent(invocieNumber as string)}`}>/
    <Link
      path={`/mylist/${encodeURIComponent(
        '6443617ceb584c09d26e6a19' as string
      )}`}
    >
      
      <Card sx={{ width: 150, height: 180, margin: 'auto' }}>
        <CardContent>
          <Text
            text={`No${invocieNumber}`}
            variant={'body1'}
            style={TextStyle}
          />
          <Text
            text={businessInfo.companyName}
            variant={'body1'}
            style={TextStyle}
          />
          <Text text={issued} variant={'body1'} style={TextStyle} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default InvoiceCard;
