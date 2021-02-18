/*! dsr-index | DSRKafuU | Copyright (c) Apache 2.0 License */

import 'normalize.css';
import './scss/index.scss';
import info from './ts/info';
import redirect from './ts/redirect';

(async function () {
  // check domain
  const host = window.location.hostname;
  const allowHosts = ['localhost', '127.0.0.1', ...__webpack_HOST__.split(',')];
  if (!allowHosts.includes(host)) {
    document.body.textContent = 'hostname not allowed';
    return;
  }

  // init info
  await info();

  // go redirect
  const url = new URL(window.location.href);
  if (url.searchParams.has('t')) {
    await redirect(url.searchParams);
  }
})();
