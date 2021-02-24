/**
 * check webp (lossy, non alpha/animate) support
 * @return {Promise<boolean>}
 */
function checkWebP() {
  return new Promise((resolve) => {
    // init an image
    const uri =
      'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
    const img = new Image();

    // set triggers
    img.onerror = () => {
      resolve(false);
    };
    img.onload = (event) => {
      const result = event && event.type === 'load' ? Number(img.width) === 1 : false;
      resolve(result);
    };
    img.src = uri;
  });
}

export default checkWebP;
