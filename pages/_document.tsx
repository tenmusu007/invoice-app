import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Invoicer</title>
        <meta
          name="description"
          content="Tired of creating invoice from the scratch? Now is the time to start using our Invoiceapp. This app allows you to create a invoice with a saved templates."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
