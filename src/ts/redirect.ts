import triggerAnimation from './utils/triggerAnimation';
import { logError, logInfo } from './utils/loggers';
import svgSpinner from '../svg/spinner-third.svg';

/**
 * init redirect
 * @param {string} target
 * @param {number} timeout
 */
async function redirect(target: string, timeout: number = 2000) {
  try {
    // get info
    target = target.trim();
    logInfo('redirecting request received');

    // generate dom
    const redirect = document.createElement('div');
    redirect.classList.add('redirect', 'a-fadein');
    redirect.innerHTML = `${svgSpinner}`.trim();
    let label = document.createElement('span');
    label.textContent = 'redirecting to';
    redirect.appendChild(label);
    let pre = document.createElement('pre');
    pre.textContent = target;
    redirect.appendChild(pre);

    // insert dom
    const main = document.querySelector('main .card');
    if (!main) {
      return;
    }
    main.appendChild(redirect);

    // main card height change
    // anime/trans = 750ms/150ms
    await triggerAnimation(main, 750, 150);

    // redirect section fade-in
    // anime/trans = 750ms/0ms
    await triggerAnimation(redirect, 500, 0);
    logInfo('redirect secion initialized');

    // check target then redirect
    if (/^.*:\/\//.exec(target)) {
      setTimeout(() => {
        window.location.href = target;
      }, timeout);
    }
  } catch (e) {
    logError(e);
  }
}

export default redirect;
