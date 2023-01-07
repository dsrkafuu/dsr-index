import { Html, Head, Main, NextScript } from 'next/document';
import {
  FAVICON__FAVICON_ICO as icoIcon,
  FAVICON__PWA_192X192_PNG as pwa192Icon,
  FAVICON__PWA_512X512_PNG as pwa512Icon,
  FAVICON__APPLE_TOUCH_ICON_PNG as appleIcon,
} from '@dsrca/cdn';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '../utils/chakra';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://cdn.jsdelivr.net' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;700'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans+SC:wght@400;500;700'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans+JP:wght@400;500;700'
        />
        <link rel='icon' sizes='any' href={icoIcon} />
        <link rel='icon' sizes='192x192' href={pwa192Icon} />
        <link rel='icon' sizes='512x512' href={pwa512Icon} />
        <link rel='apple-touch-icon' sizes='180x180' href={appleIcon} />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
