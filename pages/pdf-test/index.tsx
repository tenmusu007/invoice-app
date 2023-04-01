import dynamic from 'next/dynamic';

import React, { useEffect, useState } from 'react';

const TestPDF = dynamic(
  () => import('../../src/components/organisms/PDFView/index'),
  {
    ssr: false,
  }
);

const PDFViewTest = () => {
  const [client, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <TestPDF />
    </div>
  );
};

export default PDFViewTest;
