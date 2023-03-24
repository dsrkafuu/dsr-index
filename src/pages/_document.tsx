import { Html, Head, Main, NextScript } from 'next/document';

const CustomDocument = () => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
