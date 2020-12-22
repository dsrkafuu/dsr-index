/**
 * check webp (lossy, non alpha/animate) support
 * @returns {Promise<Boolean>}
 */
export function checkWebP() {
  return new Promise((resolve, reject) => {
    try {
      // init an image
      const uri =
        'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
      const img = new Image();

      // set triggers
      function handleResult(event) {
        const result = event && event.type === 'load' ? img.width == 1 : false;
        resolve(result);
      }
      img.onerror = handleResult;
      img.onload = handleResult;
      img.src = uri;
    } catch (e) {
      reject(e);
    }
  });
}
