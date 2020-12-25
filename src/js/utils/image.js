/**
 * load an image
 * @param {HTMLElement} container
 * @param {String} src
 */
function loadImage(container, src, alt) {
  // loading start time
  const st = Date.now();

  return new Promise((resolve, reject) => {
    const image = new Image();
    alt && (image.alt = alt);

    image.onerror = (e) => {
      reject(e);
    };
    image.onload = () => {
      // at lease 500ms loading time
      const lt = 500 - (Date.now() - st);

      if (lt >= 4) {
        setTimeout(() => {
          container.appendChild(image);
          resolve();
        }, lt);
      } else {
        container.appendChild(image);
        resolve();
      }
    };

    image.src = src;
  });
}

export { loadImage };
