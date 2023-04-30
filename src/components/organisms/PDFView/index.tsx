import React, { useState, useEffect } from 'react';
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

import { ApiInstance } from 'helper/ApiInstance';

const styles = StyleSheet.create({
  page: { paddingTop: 200 },
  section: { margin: '24px', marginTop: 36 },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  heading: { fontSize: '20px', fontWeight: 'bold' },
  title: {
    fontSize: '32px',
    textAlign: 'left',
    letterSpacing: '2px',
    fontWeight: 'bold',
  },
  info: {
    fontSize: '14px',
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
  // Put all of them in a custom hook
  // Type them
  const [invoiceData, setInvoiceData] = useState<any>();
  const getInvoice = async (id: string) => {
    try {
      const response = await ApiInstance({
        method: 'post',
        url: `/invoice/get`,
        data: { invoiceId: id },
      });
      if (response.status === 400) return null;
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    const id: string | null = sessionStorage.getItem('invoice_id');
    if (id === null) return;
    getInvoice(id).then((data) => {
      if (data !== null) {
        setInvoiceData(data);
      }
    });
  }, []);

  return (
    <Document>
      <Page size="A4">
        {typeof invoiceData !== 'undefined' && (
          <View style={styles.section}>
            <View style={styles.body}>
              <View>
                <Text style={styles.title}>Invoice</Text>
              </View>
              <View style={[styles.info]}>
                <Text>Invoice: # {invoiceData.invoiceNumber?.toString()} </Text>
                <Text>Issued: {invoiceData.issuedDate}</Text>
                <Text>Due: {invoiceData.dueDate}</Text>
              </View>
              <View
                style={[styles.flex, styles.paymentInfo, styles.centralize]}
              >
                <View style={[styles.width45, styles.flexColumn]}>
                  <View style={styles.heading}>
                    <Text>Bill To:</Text>
                  </View>
                  <View style={[styles.smallText, styles.flexColumn]}>
                    <Text>{invoiceData.billTo.companyName}</Text>
                    <Text>{invoiceData.billTo.address}</Text>
                    <Text>{invoiceData.billTo.city}</Text>
                    <Text>{invoiceData.billTo.province}</Text>
                    <Text>{invoiceData.billTo.country}</Text>
                    <Text>{invoiceData.billTo.postal}</Text>
                  </View>
                </View>
                <View style={[styles.width45, styles.flexColumn]}>
                  <View style={styles.heading}>
                    <Text>Business Info:</Text>
                  </View>
                  <View style={[styles.smallText, styles.flexColumn]}>
                    <Text>{invoiceData.businessInfo.name}</Text>
                    <Text>{invoiceData.businessInfo.address}</Text>
                    <Text>{invoiceData.businessInfo.city}</Text>
                    <Text>{invoiceData.businessInfo.province}</Text>
                    <Text>{invoiceData.businessInfo.country}</Text>
                    <Text>{invoiceData.businessInfo.postal}</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.flexColumn, { flexBasis: 300 }]}>
                <View style={[styles.flex, styles.centralize, styles.items]}>
                  <Text style={styles.itemTitle}>Description</Text>
                  <Text style={styles.itemTitle}>Qty</Text>
                  <Text style={styles.itemTitle}>Unit Price</Text>
                  <Text style={styles.itemTitle}>Amount</Text>
                  <Text style={styles.itemTitle}>Tax</Text>
                </View>
                <View
                  style={[
                    styles.flex,
                    styles.centralize,
                    styles.smallText,
                    styles.flexColumn,
                  ]}
                >
                  {invoiceData.items.map((item: any, index: any) => (
                    <View key={index} style={styles.item}>
                      <Text style={styles.itemContent}>{item.name}</Text>
                      <Text style={styles.itemContent}>{item.quantity}</Text>
                      <Text style={styles.itemContent}>${item.unitPrice}</Text>
                      <Text style={styles.itemContent}>
                        $ {Number(item.quantity) * Number(item.unitPrice)}{' '}
                      </Text>
                      <Text style={styles.itemContent}>{item.tax}%</Text>
                    </View>
                  ))}
                  <View style={[{ textAlign: 'right', paddingTop: '16px' }]}>
                    <Text>Sub total: ${invoiceData.subTotal}</Text>
                    <Text>Total: ${invoiceData.total}</Text>
                  </View>
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
                  <Text style={[{ fontSize: '16px' }]}>
                    NOTE/TERMS & CONDITION
                  </Text>
                  <View>
                    <Text></Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

const PDFView = () => {
  // eslint-disable-next-line no-unused-vars
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
