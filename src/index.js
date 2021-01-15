/*! dsr-index | DSRKafuU <amzrk2.cc> | Copyright (c) Apache 2.0 License */

/* css */

import 'normalize.css';
import './scss/index.scss';

/* js */

import { initInfo } from './js/info.js';

(async function () {
  // check domain
  const host = window.location.host;
  if (!/amzrk2\.cc$/gi.exec(host) || !/^localhost/gi.exec(host)) {
    document.body.textContent = 'host not allowed';
    return;
  }

  // check redirect
  let initRedirect = null;
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  // load module if needed
  if (urlParams.has('t')) {
    const redirect = await import(/* webpackChunkName: "redirect" */ './js/redirect.js');
    initRedirect = redirect.initRedirect;
  }

  // init info
  await initInfo();

  // go redirect
  if (initRedirect) {
    initRedirect(urlParams);
  }
})();
