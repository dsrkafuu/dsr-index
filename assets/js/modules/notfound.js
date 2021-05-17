/**
 * show 404 in not found page
 */
export default async () => {
  const path = window.location.pathname;
  if (path !== '/') {
    const el = document.querySelector('.info .meta h1');
    el && (el.textContent = '404 Not Found');
  }
};
