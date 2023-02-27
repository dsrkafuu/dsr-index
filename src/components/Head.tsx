import { Helmet } from 'react-helmet-async';
import { siteName } from '$config';

interface HeadProps {
  title?: string;
}

function Head({ title }: HeadProps) {
  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
    </Helmet>
  );
}

export default Head;
