/*! dsr-index | DSRKafuU <amzrk2.cc> | Copyright (c) Apache 2.0 License */

/* css */

import 'normalize.css';
import './scss/index.scss';

/* js */

import { initInfo } from './js/info.js';
import { ThemeManager } from './js/theme.js';

(async function () {
  // init theme manager
  const tm = new ThemeManager();
  document.querySelector('.adjust.btn').addEventListener('click', () => {
    tm.switchTheme();
  });
  // init info
  await initInfo();
  // check redirect
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  if (urlParams.has('t')) {
    const { initRedirect } = await import(/* webpackChunkName: "redirect" */ './js/redirect.js');
    initRedirect(urlParams);
  }
})();
