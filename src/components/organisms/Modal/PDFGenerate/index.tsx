import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
import dummyData from 'mocks/mylist.json';

//to prevent conflict between Next.js and PDFViewer from occurring
const PDFViewerNoSSR = dynamic(
  () => import('@react-pdf/renderer').then((module) => module.PDFViewer),
  { ssr: false }
);

const PDFGeneratePage = () => {
  const [pdfContent, setPdfContent] = useState(dummyData);

  return (
    <div>
      <PDFViewerNoSSR>
        <Document>
          {dummyData.data.list.map((data: any) => (
            <Page key={data.invocieNumber}>
                  <Text>{ data.invocieNumber}</Text>
                  <Text>{ data.issued}</Text>
                  <Text>{ data.due}</Text>
            </Page>
          ))}
        </Document>
      </PDFViewerNoSSR>
    </div>
  );
};

export default PDFGeneratePage;
