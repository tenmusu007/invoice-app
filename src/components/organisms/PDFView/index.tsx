import React, { useState, useEffect } from 'react';
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

import dummyInvoice from 'mocks/dummyInvoice.json';
import { Invoice as InvoiceType } from 'types/inputValue';

const styles = StyleSheet.create({
  section: { textAlign: 'center', margin: 30 },
  heading: { fontSize: '32px' },
});

const PDF = () => {
  const [ invoice, setInvoice ] = useState<InvoiceType>()
  return (
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          {dummyInvoice.invoice.data.map((data) => (
            <div key={data.invocieNumber}>
              <Text>{data.invocieNumber}</Text>
              <Text>{data.issued}</Text>
              <Text>{data.due}</Text>
              <View style={styles.heading}>
                <Text>Business Info</Text>
              </View>
              <Text>{data.businessInfo.companyName}</Text>
              <Text>{data.businessInfo.address}</Text>
              <Text>{data.businessInfo.city}</Text>
              <Text>{data.businessInfo.province}</Text>
              <Text>{data.businessInfo.country}</Text>
              <View style={styles.heading}>
                <Text>Bill To</Text>
              </View>
              <Text>{data.billTo.companyName}</Text>
              <Text>{data.billTo.addressLine1}</Text>
              <Text>{data.billTo.city}</Text>
              <Text>{data.billTo.province}</Text>
              <Text>{data.billTo.country}</Text>
            </div>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const PDFView = () => {
  const [client, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <div>
      <PDFViewer style={{ height: '1400px', width: '1400px' }}>
        <PDF />
      </PDFViewer>
    </div>
  );
};

export default PDFView;
