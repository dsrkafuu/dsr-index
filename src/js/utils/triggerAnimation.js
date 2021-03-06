/**
 * trigger the css animation on html node
 * @param {Element} node
 * @param {number} duration animation total duration
 * @param {number} transition animation transition time
 * @param {Function} callback callback (like cleaner) after total duration
 * @return {Promise<void>}
 */
function triggerAnimation(node, duration = 500, transition = 0, callback) {
  return new Promise((resolve, reject) => {
    !node.classList && reject();

    // get animation classnames
    const animations = [];
    node.classList.forEach((className) => {
      if (className.startsWith('a-')) {
        animations.push(className);
      }
    });
    !animations.length && reject();

    // trigger animations
    const trigeredClasses = animations.map((className) => `${className}-end`);
    node.classList.add(...trigeredClasses);

    // animation resolved after `duration - transition`
    setTimeout(() => resolve(), duration - transition < 4 ? 4 : duration - transition);
    // callback after total duration
    if (callback) {
      setTimeout(callback, duration < 4 ? 4 : duration);
    }
  });
}

export default triggerAnimation;
