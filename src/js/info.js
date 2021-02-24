import checkWebP from './utils/checkWebP';
import loadImage from './utils/loadImage';
import { logError, logInfo } from './utils/loggers';
import triggerAnimation from './utils/triggerAnimation';
import webpAvatar from '@/cdn/images/avatars/dsrkafuu_256p.webp';
import jpgAvatar from '@/cdn/images/avatars/dsrkafuu_256p.jpg';

/**
 * init info section
 */
async function info() {
  try {
    const webpSup = await checkWebP();
    webpSup ? logInfo('webp supported') : logInfo('webp not supported');

    // init avatar
    const avatarWrapper = document.querySelector('.info:not(.skt) .avatar .image');
    if (!avatarWrapper) {
      return;
    }
    // ensure image loading time >= 1s
    // to have a better skeleton animation
    const startTime = Date.now();
    await loadImage(avatarWrapper, webpSup ? webpAvatar : jpgAvatar, 'avatar', 128, 128);
    const loadingTime = Date.now() - startTime;
    if (loadingTime < 1000) {
      await new Promise((res) =>
        setTimeout(() => res(null), 1000 - loadingTime > 4 ? 1000 - loadingTime : 4)
      );
    }
    logInfo('avatar loaded');

    // trigger skt fadeout and info fadein
    const skt = document.querySelector('.info.skt');
    if (!skt) {
      return;
    }
    // anime/trans = 500ms/500ms
    await triggerAnimation(skt, 500, 500, () => {
      (skt.parentElement || document.querySelector('main .card'))?.removeChild(skt);
      logInfo('skeleton removed');
    });

    // start fade-in info same time as skeleton fade-out trigered
    const info = document.querySelector('.info:not(.skt)');
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
