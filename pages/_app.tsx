import '../utils/global.scss';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '../utils/chakra';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
