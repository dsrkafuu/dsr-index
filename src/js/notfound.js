import { logError } from './utils/loggers';

/**
 * init notfound section
 */
function notfound() {
  try {
    const nameNode = document.querySelector('.info:not(.skt) .content .name');
    if (!nameNode) {
      return;
    }
    nameNode.setAttribute('aria-label', '404 Not Found');
    nameNode.textContent = '404 Not Found';
    nameNode.classList.add('notfound');
    document.querySelector('.info.skt .content .name')?.classList.add('notfound');

    const bioNode = document.querySelector('.info:not(.skt) .content .bio');
    if (!bioNode) {
      return;
    }
    bioNode.textContent = 'requested resource not exist';
  } catch (e) {
    logError(e);
  }
}

export default notfound;
