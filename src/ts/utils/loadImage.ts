/**
 * load an image
 * @param {Element} container
 * @param {string} src
 * @param {string} alt
 * @param {number} width
 * @param {number} height
 * @return {Promise<void>}
 */
function loadImage(
  container: Element,
  src: string,
  alt: string,
  width: number,
  height: number
): Promise<void> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    if (alt) {
      image.alt = alt;
      const words = alt.split(' ');
      words.forEach((val, index) => {
        words[index] = `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
      });
      image.setAttribute('aria-label', words.join(' '));
    }

    width && (image.width = width);
    height && (image.height = height);

    image.onerror = (e) => {
      reject(e);
    };
    image.onload = () => {
      setTimeout(() => {
        container.appendChild(image);
        resolve();
      }, 4);
    };

    image.src = src;
  });
}

export default loadImage;
