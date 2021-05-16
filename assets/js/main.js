/*! dsr-index | DSRKafuU (https://dsrkafuu.su) | Copyright (c) Apache-2.0 License */

const url = new URL(window.location.href);
console.log(url);
url.searchParams.set('param', 123);
console.log(url.toString());
