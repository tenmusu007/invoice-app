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
  page: { paddingTop: 200 },
  section: { margin: '24px', marginTop: 36 },
  heading: { fontSize: '24px' },
  title: {
    fontSize: '32px',
    textAlign: 'left',
    letterSpacing: '2px',
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'right',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

const PDF = () => {
  const [invoice, setInvoice] = useState<InvoiceType>();
  return (
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          {dummyInvoice.invoice.data.map((data) => (
            <div key={data.invocieNumber}>
              <View>
                <Text style={styles.title}>Invoice</Text>
              </View>
              <View style={styles.info}>
                <Text>{data.invocieNumber}</Text>
                <Text>{data.issued}</Text>
                <Text>{data.due}</Text>
              </View>
              <View style={styles.flex}>
                <View style={{ width: '45%'}}>
                  <View style={styles.heading}>
                    <Text>Bill To:</Text>
                  </View>
                  <Text>{data.billTo.companyName}</Text>
                  <Text>{data.billTo.addressLine1}</Text>
                  <Text>{data.billTo.city}</Text>
                  <Text>{data.billTo.province}</Text>
                  <Text>{data.billTo.country}</Text>
                </View>
                <View style={{ width: '45%'}}>
                  <View style={styles.heading}>
                    <Text>Business Info:</Text>
                  </View>
                  <Text>{data.businessInfo.companyName}</Text>
                  <Text>{data.businessInfo.address}</Text>
                  <Text>{data.businessInfo.city}</Text>
                  <Text>{data.businessInfo.province}</Text>
                  <Text>{data.businessInfo.country}</Text>
                </View>
              </View>
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
      <PDFViewer
        style={{ height: window.innerWidth, width: window.innerWidth }}
      >
        <PDF />
      </PDFViewer>
    </div>
  );
};

export default PDFView;
