import { event } from 'nextjs-google-analytics';

export const sendLinkClick = async (
  name: string,
  e: React.MouseEvent<HTMLAnchorElement>
) => {
  const target = e.target;
  if (target instanceof HTMLElement) {
    const href = target.getAttribute('href');
    event(name, { href });
  }
};
