import { event } from 'nextjs-google-analytics';

export function reportClick(eventName: string, e: React.MouseEvent) {
  const target = e.target;
  console.log(e.target);
  if (target instanceof HTMLElement) {
    const href = target.getAttribute('href');
    event(eventName, { href });
  }
}
