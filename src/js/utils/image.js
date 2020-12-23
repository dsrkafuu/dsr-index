/**
 * load an image
 * @param {HTMLElement} container
 * @param {String} src
 */
function loadImage(container, src, alt) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    alt && (image.alt = alt);
    image.onload = () => {
      container.appendChild(image);
      resolve();
    };
    image.onerror = (e) => {
      reject(e);
    };
    image.src = src;
  });
}

export { loadImage };
