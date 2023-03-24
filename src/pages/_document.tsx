import { Html, Head, Main, NextScript } from 'next/document';

const CustomDocument = () => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans+SC:wght@400;500'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans+JP:wght@400;500'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
