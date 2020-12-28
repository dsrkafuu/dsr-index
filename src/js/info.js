import { checkWebP } from './utils/feature.js';
import { loadImage } from './utils/image.js';
import { logError, logInfo } from './utils/logger.js';
import { triggerAnimation } from './utils/animation.js';
import webpAvatar from '../images/avatars/amzrk2_256p.webp';
import jpgAvatar from '../images/avatars/amzrk2_256p.jpg';

/**
 * init info section
 * @returns {Promise<void>}
 */
async function initInfo() {
  try {
    const webp = await checkWebP();

    // init avatar
    const wrapper = document.querySelector('.info:not(.skt) .avatar .image');
    await loadImage(wrapper, webp ? webpAvatar : jpgAvatar, 'avatar');
    logInfo('Avatar loaded');

    // trigger animation
    // skt fadeout and info fadein at same 1000ms transition
    const skt = document.querySelector('main .info.skt');
    await triggerAnimation(skt, 1000, 1000);
    setTimeout(() => {
      document.querySelector('main .card').removeChild(skt);
      logInfo('Skeleton removed');
    }, 1000);
    // 250ms transition for redirect
    const info = document.querySelector('main .info:not(.skt)');
    await triggerAnimation(info, 1000, 250);
    logInfo('Info section initialized');
  } catch (e) {
    logError(e);
  }
}

export { initInfo };
