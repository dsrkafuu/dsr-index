import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GoogleAnalytics trackPageViews />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default CustomApp;
