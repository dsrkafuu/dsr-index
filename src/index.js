/*! dsr-index | DSRKafuU (https://dsrkafuu.su) | Copyright (c) Apache 2.0 License */

import 'normalize.css';
import './scss/index.scss';

import notfound from './js/notfound';
import info from './js/info';
import redirect from './js/redirect';
import interact from './js/interact';

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
  let nf = false;
  if (window.location.pathname !== '/') {
    notfound();
    nf = true;
  }

  // init info
  await info();

  const url = new URL(window.location.href);
  const target = url.searchParams.get('t');
  const duration = Number(url.searchParams.get('d')) || undefined;
  // go home if 404
  if (nf) {
    await redirect(`https://${window.location.hostname}`, duration);
  }
  // go redirect
  else if (target) {
    await redirect(`${target}`, duration);
  }

  // init interact
  await interact();
})();
