import { triggerAnimation } from './utils/animation.js';
import svgSpinner from '../svg/spinner-third.svg';

/**
 * generate redirect dom
 * @param {String} target
 * @param {Number} duration timeout in ms
 * @returns {Promise<void>}
 */
function insertIndicator(target, duration) {
  return new Promise((resolve, reject) => {
    try {
      // get main card
      const main = document.querySelector('main .card');

      // gen indicator section
      const redirect = document.createElement('div');
      redirect.classList.add('redirect', 'a-opacity');
      redirect.innerHTML = `${svgSpinner}`.trim();
      let label = document.createElement('span');
      label.textContent = 'redirecting to';
      redirect.appendChild(label);
      let pre = document.createElement('pre');
      pre.textContent = target;
      redirect.appendChild(pre);

      // insert dom and trigger animations
      setTimeout(() => {
        triggerAnimation(main);
        main.appendChild(redirect);
        setTimeout(() => {
          triggerAnimation(redirect);
          resolve();
        }, 750);
      }, 4);
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * go redirect
 * @param {URLSearchParams} urlParams
 * @returns {Promise<void>}
 */
async function initRedirect(urlParams) {
  const target = urlParams.get('t') || '';
  const duration = urlParams.get('d') || 5000;

  // init animation
  await insertIndicator(target, duration);
}

export { initRedirect };
