/*! dsr-index | DSRKafuU (https://dsrkafuu.su) | Copyright (c) Apache 2.0 License */

import 'normalize.css';
import './scss/index.scss';
import notfound from './ts/notfound';
import info from './ts/info';
import redirect from './ts/redirect';

(async function () {
  // check domain
  const host = window.location.hostname;
  const allowHosts = [
    'localhost',
    '127.0.0.1',
    ...__webpack_HOST__.split(',').map((val) => val.trim()),
  ];
  if (!allowHosts.includes(host)) {
    document.body.textContent = 'hostname not allowed';
    return;
  }

  // check not found
  if (window.location.pathname !== '/') {
    notfound();
  }

  // init info
  await info();

  // go redirect
  const url = new URL(window.location.href);
  const target = url.searchParams.get('t');
  const duration = Number(url.searchParams.get('d')) || undefined;
  if (target) {
    await redirect(`${target}`, duration);
  }
})();
