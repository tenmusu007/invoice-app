import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Link from 'src/components/atoms/Link';
import Text from 'src/components/atoms/Text';

import type { MyInvoiceCard } from 'types/invoiceData';

type Props = {
  list: MyInvoiceCard;
};
const TextStyle = { textAlign: 'center', marginY: 2 } as const;

const InvoiceCard = (props: Props) => {
  const { invoiceNumber, issued, billTo, invoiceId } = props.list;
  return (
    <Link path={`/mylist/${encodeURIComponent(`${invoiceId}` as string)}`}>
      <Card sx={{ width: 150, height: 180, margin: 'auto' }}>
        <CardContent>
          <Text
            text={`No${invoiceNumber}`}
            variant={'body1'}
            style={TextStyle}
          />
          <Text text={billTo.companyName} variant={'body1'} style={TextStyle} />
          <Text text={issued} variant={'body1'} style={TextStyle} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default InvoiceCard;
