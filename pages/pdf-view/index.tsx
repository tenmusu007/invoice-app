import dynamic from 'next/dynamic';

import React, { useEffect, useState } from 'react';

const TestPDF = dynamic(
  () => import('../../src/components/organisms/PDFView/index'),
  {
    ssr: false,
  }
);

const frameStyle = {
  height: '100%',
  marginTop: 160,
} as const;

const PDFViewTest = () => {
  const [client, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div style={frameStyle}>
      <TestPDF />
    </div>
  );
};

export default PDFViewTest;
