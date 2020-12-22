/*! dsr-index | DSRKafuU <amzrk2.cc> | Copyright (c) Apache 2.0 License */

/* css */

import 'normalize.css';
import './scss/index.scss';

/* js */

import { initInfo } from './js/info.js';
import { insertIndicator } from './js/redirect.js';

initInfo().then(() => {
  insertIndicator();
});
