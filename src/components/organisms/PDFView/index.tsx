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
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  heading: { fontSize: '24px', fontWeight: 'black' },
  title: {
    fontSize: '32px',
    textAlign: 'left',
    letterSpacing: '2px',
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'right',
    marginBottom: '32px',
  },
  width45: {
    width: '45%',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'justify',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  centralize: {
    width: '90%',
    margin: '0 auto',
  },
  textCenter: {
    textAlign: 'center',
  },
  paymentInfo: {
    borderTop: '1 solid gray',
    borderBottom: '1 solid gray',
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  items: {
    gap: 10,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'right',
    justifyContent: 'space-between',
  },
  itemTitle: {
    width: '20%',
    textAlign: 'center',
  },
  itemContent: {
    width: '18%',
    textAlign: 'center',
  },
  rectangle: {
    border: '1 solid black',
  },
  smallText: {
    fontSize: '16px',
  },
});

const PDF = () => {
  const [invoice, setInvoice] = useState<InvoiceType>();
  return (
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          {dummyInvoice.invoice.data.map((data) => (
            <View key={data.invocieNumber} style={styles.body}>
              <View>
                <Text style={styles.title}>Invoice</Text>
              </View>
              <View style={[styles.info]}>
                <Text>Invoice: #{data.invocieNumber}</Text>
                <Text>Issued: {data.issued}</Text>
                <Text>Due: {data.due}</Text>
              </View>
              <View
                style={[styles.flex, styles.paymentInfo, styles.centralize]}
              >
                <View style={[styles.width45, styles.flexColumn]}>
                  <View style={styles.heading}>
                    <Text>Bill To:</Text>
                  </View>
                  <View style={[styles.smallText, styles.flexColumn]}>
                    <Text>{data.billTo.companyName}</Text>
                    <Text>{data.billTo.addressLine1}</Text>
                    <Text>{data.billTo.city}</Text>
                    <Text>{data.billTo.province}</Text>
                    <Text>{data.billTo.country}</Text>
                  </View>
                </View>
                <View style={[styles.width45, styles.flexColumn]}>
                  <View style={styles.heading}>
                    <Text>Business Info:</Text>
                  </View>
                  <View style={[styles.smallText, styles.flexColumn]}>
                    <Text>{data.businessInfo.companyName}</Text>
                    <Text>{data.businessInfo.address}</Text>
                    <Text>{data.businessInfo.city}</Text>
                    <Text>{data.businessInfo.province}</Text>
                    <Text>{data.businessInfo.country}</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.flexColumn, { flexBasis: 300 }]}>
                <View style={[styles.flex, styles.centralize, styles.items]}>
                  <Text style={styles.itemTitle}>Description</Text>
                  <Text style={styles.itemTitle}>Qty</Text>
                  <Text style={styles.itemTitle}>Unit Price</Text>
                  <Text style={styles.itemTitle}>Tax</Text>
                  <Text style={styles.itemTitle}>Amount</Text>
                </View>
                <View
                  style={[
                    styles.flex,
                    styles.centralize,
                    styles.smallText,
                    styles.flexColumn,
                  ]}
                >
                  {data.items.map((item, index) => (
                    <View key={index} style={styles.item}>
                      <Text style={styles.itemContent}>{item.name}</Text>
                      <Text style={styles.itemContent}>{item.quantity}</Text>
                      <Text style={styles.itemContent}>${item.unitPrice}</Text>
                      <Text style={styles.itemContent}>{item.tax}%</Text>
                      <Text style={styles.itemContent}>${item.amount} </Text>
                    </View>
                  ))}
                </View>
              </View>
              <View>
                <View
                  style={[
                    styles.rectangle,
                    styles.centralize,
                    { padding: '8px', height: '100px' },
                  ]}
                >
                  <Text>NOTE/TERMS & CONDITION</Text>
                  <View>
                    <Text></Text>
                  </View>
                </View>
              </View>
            </View>
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
