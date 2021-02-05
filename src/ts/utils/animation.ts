/**
 * trigger the css animation on html node
 * @param {Element} node
 * @param {number} duration animation total duration
 * @param {number} transition animation transition time
 * @return {Promise<void>}
 */
function triggerAnimation(
  node: Element,
  duration: number = 500,
  transition: number = 100
): Promise<void> {
  return new Promise((resolve, reject) => {
    !node.classList && reject();

    // get animation classnames
    const animations: string[] = [];
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
