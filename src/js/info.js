import { checkWebP } from './utils/feature.js';
import { logError } from './utils/logger.js';
import { triggerAnimation } from './utils/animation.js';
import webpAvatar from '../images/avatars/amzrk2_256p.webp';
import jpgAvatar from '../images/avatars/amzrk2_256p.jpg';

/**
 * process info animation
 * @param {Boolean} webp webp support status
 */
function initInfoAnimation(webp) {
  return new Promise((resolve, reject) => {
    try {
      let event = null;

      // get info node
      const info = document.querySelector('main .info');

      // init avatar
      const wrapper = document.querySelector('.avatar .image');
      const avatar = new Image();
      avatar.alt = 'avatar';
      avatar.onload = (evt) => {
        event = evt;
      };
      wrapper.appendChild(avatar);

      // load callbacks
      setTimeout(() => {
        if (event && event.type === 'load') {
          triggerAnimation(info);
          resolve(event);
        } else {
          avatar.onload = (evt) => {
            triggerAnimation(info);
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
async function initInfo() {
  try {
    const webp = await checkWebP();
    await initInfoAnimation(webp);
  } catch (e) {
    logError(e);
  }
}

export { initInfo };
