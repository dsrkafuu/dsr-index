import { checkWebP } from './utils/feature';
import { loadImage } from './utils/image';
import { logError, logInfo } from './utils/logger';
import { triggerAnimation } from './utils/animation';
import webpAvatar from '../images/avatars/amzrk2_256p.webp';
import jpgAvatar from '../images/avatars/amzrk2_256p.jpg';

/**
 * init info section
 */
async function initInfo() {
  try {
    const webp = await checkWebP();

    // init avatar
    const wrapper = document.querySelector('.info:not(.skt) .avatar .image');
    if (!wrapper) {
      return;
    }
    await loadImage(wrapper, webp ? webpAvatar : jpgAvatar, 'avatar', 128, 128);
    logInfo('avatar loaded');

    // trigger skt fadeout and info fadein
    const skt = document.querySelector('main .info.skt');
    if (!skt) {
      return;
    }
    await triggerAnimation(skt, 500, 500); // anime/trans = 500ms/500ms
    setTimeout(() => {
      document.querySelector('main .card')?.removeChild(skt);
      logInfo('skeleton removed');
    }, 500);

    // 200ms transition then trigger redirect
    const info = document.querySelector('main .info:not(.skt)');
    if (!info) {
      return;
    }
    await triggerAnimation(info, 500, 200); // anime/trans = 500ms/200ms
    logInfo('info section initialized');
  } catch (e) {
    logError(e);
  }
}

export { initInfo };
