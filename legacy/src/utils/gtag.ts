/* eslint-disable @typescript-eslint/no-explicit-any */

export function reportClick(name: string, e: React.MouseEvent) {
  const { gtag } = window as any;
  if (gtag) {
    const target = e.target;
    if (target instanceof HTMLElement) {
      const href = target.getAttribute('href');
      gtag('event', name, { href });
    }
  }
}
