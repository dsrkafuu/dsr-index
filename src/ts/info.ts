import checkWebP from './utils/checkWebP';
import loadImage from './utils/loadImage';
import { logError, logInfo } from './utils/loggers';
import triggerAnimation from './utils/triggerAnimation';
import webpAvatar from '../images/avatars/dsrkafuu_256p.webp';
import jpgAvatar from '../images/avatars/dsrkafuu_256p.jpg';

/**
 * init info section
 */
async function info() {
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
    // anime/trans = 500ms/500ms
    await triggerAnimation(skt, 500, 500, () => {
      document.querySelector('main .card')?.removeChild(skt);
      logInfo('skeleton removed');
    });

    // start fade-in info same time as skeleton fade-out trigered
    const info = document.querySelector('main .info:not(.skt)');
    if (!info) {
      return;
    }
    // anime/trans = 500ms/200ms
    // wait 200ms then trigger redirect
    await triggerAnimation(info, 500, 200, () => {
      logInfo('info section initialized');
    });
  } catch (e) {
    logError(e);
  }
}

export default info;
