/**
 * trigger the css animation on html node
 * @param {HTMLElement} node
 */
function triggerAnimation(node) {
  if (!node || !node.classList) {
    return;
  }
  // get animations
  const animations = [];
  node.classList.forEach((className) => {
    if (className.startsWith('a-')) {
      animations.push(className);
    }
  });
  if (!animations.length) {
    return;
  }
  // trigger animations
  animations.forEach((className) => {
    node.classList.add(`${className}-end`);
  });
}

export { triggerAnimation };
