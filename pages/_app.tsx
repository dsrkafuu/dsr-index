import '../utils/global.scss';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { ChakraProvider } from '../utils/chakra';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider cookies={pageProps.cookies}>
        <Component {...pageProps} />
      </ChakraProvider>
      <GoogleAnalytics trackPageViews />
    </>
  );
}

export default MyApp;
