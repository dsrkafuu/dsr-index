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
    const wrapper = document.querySelector('.avatar .image');
    await loadImage(wrapper, webp ? webpAvatar : jpgAvatar, 'avatar');
    logInfo('Avatar loaded');

    // trigger animation
    const info = document.querySelector('main .info');
    await triggerAnimation(info, 1000, 250);
    logInfo('Info section initialized');
  } catch (e) {
    logError(e);
  }
}

export { initInfo };
