import { checkWebP } from './utils/feature.js';
import { logError } from './utils/logger.js';

import webpAvatar from '../images/avatars/amzrk2_256p.webp';
import jpgAvatar from '../images/avatars/amzrk2_256p.jpg';

/**
 * process main init animation
 * @param {Boolean} webp webp support status
 */
function mainAnimation(webp) {
  return new Promise((resolve, reject) => {
    try {
      let loadEvent = null;
      const transAnimation = 'opacity 1000ms ease';

      // get contents node
      const content = document.querySelector('#main .content');
      content.style.transition = transAnimation;

      // init avatar
      const wrapper = document.querySelector('#main .image');
      const avatar = new Image();
      avatar.alt = 'avatar';

      // animation
      avatar.style.opacity = 0;
      avatar.style.transition = transAnimation;
      avatar.onload = (evt) => {
        loadEvent = evt;
      };
      wrapper.appendChild(avatar);

      // load callbacks
      setTimeout(() => {
        if (loadEvent && loadEvent.type === 'load') {
          content.style.opacity = 1;
          avatar.style.opacity = 1;
          resolve(loadEvent);
        } else {
          avatar.onload = (evt) => {
            content.style.opacity = 1;
            avatar.style.opacity = 1;
            resolve(evt);
          };
        }
      }, 500);

      // load image
      avatar.src = webp ? webpAvatar : jpgAvatar;
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * load avatar
 */
async function main() {
  try {
    const webp = await checkWebP();
    await mainAnimation(webp);
  } catch (e) {
    logError(e);
  }
}

export { main };
