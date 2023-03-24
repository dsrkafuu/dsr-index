import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const inter = Inter({ subsets: ['latin'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <div id='__app' className={inter.className}>
      <GoogleAnalytics trackPageViews />
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
};

export default CustomApp;
