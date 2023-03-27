import React, { useState, useEffect }  from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFGeneratePage from '../PDFGenerate';


const PDFView = () => {

  return (
    <div>
      <PDFViewer>
        <PDFGeneratePage />
      </PDFViewer>
    </div>
  );
};

export default PDFView;
