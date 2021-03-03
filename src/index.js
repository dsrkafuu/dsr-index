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

  // check not found and redirect param
  let nf = false;
  if (window.location.pathname !== '/') {
    notfound();
    nf = true;
  }
  const url = new URL(window.location.href);
  const target = url.searchParams.get('t');
  const duration = Number(url.searchParams.get('d')) || undefined;

  // init interact if not 404 or redirect
  if (!nf && !target) {
    interact();
  }

  // init info
  await info();

  // go home if 404
  if (nf) {
    await redirect(window.location.origin || `https://${window.location.host}`, duration);
  }
  // go redirect
  else if (target) {
    await redirect(`${target}`, duration);
  }
})();
