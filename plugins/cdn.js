/**
 * apply dsr-cdn
 * @param {String} pathname
 */
const applyCDN = (pathname, version = '1') => {
  if (!pathname.startsWith('/')) {
    pathname = `/${pathname}`;
  }
  return `https://cdn.jsdelivr.net/gh/amzrk2/dsr-cdn@${version}${pathname}`;
};

export default (context, inject) => {
  inject('applyCDN', applyCDN);
};
