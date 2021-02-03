/**
 * trigger the css animation on html node
 * @param {HTMLElement} node
 * @param {number} duration animation total duration
 * @param {number} transition animation transition time
 * @returns {Promise<void>}
 */
function triggerAnimation(node, duration = 500, transition = 100) {
  return new Promise((resolve, reject) => {
    (!node || !node.classList) && reject();

    // get animations
    const animations = [];
    node.classList.forEach((className) => {
      if (className.startsWith('a-')) {
        animations.push(className);
      }
    });
    !animations.length && reject();

    // trigger animations
    animations.forEach((className) => {
      node.classList.add(`${className}-end`);
    });

    // wait for animation be done
    setTimeout(
      () => {
        resolve();
      },
      duration - transition < 4 ? 4 : duration - transition
    );
  });
}

export { triggerAnimation };
