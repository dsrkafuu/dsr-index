import { triggerAnimation } from './utils/animation.js';
import { logError, logInfo } from './utils/logger.js';
import svgSpinner from '../svg/spinner-third.svg';

/**
 * init redirect
 * @param {URLSearchParams} urlParams
 * @returns {Promise<void>}
 */
async function initRedirect(urlParams) {
  try {
    // get info
    const target = (urlParams.get('t') || '').trim();
    const duration = urlParams.get('d') || 2000;
    logInfo('redirecting request received');

    // gen dom
    const redirect = document.createElement('div');
    redirect.classList.add('redirect', 'a-fadein');
    redirect.innerHTML = `${svgSpinner}`.trim();
    let label = document.createElement('span');
    label.textContent = 'redirecting to';
    redirect.appendChild(label);
    let pre = document.createElement('pre');
    pre.textContent = target;
    redirect.appendChild(pre);

    // insert dom and trigger animations
    const main = document.querySelector('main .card');
    await triggerAnimation(main, 750, 150); // anime/trans = 750ms/150ms
    main.appendChild(redirect);
    // ensure redirect animation triggered on webkit
    await new Promise((resolve) => {
      setTimeout(() => {
        const trigger = redirect.offsetTop + redirect.style.transition;
        resolve(trigger);
      }, 10);
    });
    await triggerAnimation(redirect, 500, 0); // anime/trans = 750ms/0ms
    logInfo('redirect secion initialized');

    // check target then redirect
    if (/^.*:\/\//.exec(target)) {
      setTimeout(() => {
        window.location.href = target;
      }, duration);
    }
  } catch (e) {
    logError(e);
  }
}

export { initRedirect };
