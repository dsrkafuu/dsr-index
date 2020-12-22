import { triggerAnimation } from './utils/animation.js';
import svgSpinner from '../svg/spinner-third.svg';

/**
 * generate redirect dom
 */
function insertIndicator() {
  // get main card
  const main = document.querySelector('main .card');

  // gen indicator section
  const redirect = document.createElement('div');
  redirect.classList.add('redirect', 'a-opacity');
  redirect.innerHTML = `${svgSpinner}`.trim();
  const label = document.createElement('span');
  label.textContent = 'redirecting';
  redirect.appendChild(label);

  // insert dom and trigger animations
  setTimeout(() => {
    triggerAnimation(main);
    main.appendChild(redirect);
    setTimeout(() => {
      triggerAnimation(redirect);
    }, 750);
  }, 4);
}

export { insertIndicator };
