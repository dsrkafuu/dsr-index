import { setLS, getLS } from './utils/storage.js';
import { logInfo } from './utils/logger.js';

const ATTR_KEY = 'data-theme';
const STORAGE_KEY = 'dsr-index_theme';

class ThemeManager {
  constructor() {
    this.theme = getLS(STORAGE_KEY) || document.body.getAttribute(ATTR_KEY);
    // if inline body script failed
    if (this.theme !== document.body.getAttribute(ATTR_KEY)) {
      document.body.setAttribute(ATTR_KEY, this.theme);
    }
  }

  /**
   * @private
   * get css prefer theme
   */
  getCSSTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * @private
   * get real rendered theme
   */
  getRenderedTheme() {
    if (this.theme === 'auto') {
      // if auto mode, get css theme
      return this.getCSSTheme();
    } else {
      return this.theme === 'dark' ? 'dark' : 'light';
    }
  }

  /**
   * @private
   * set theme
   * @param {String} scheme
   */
  setTheme(scheme) {
    if (['auto', 'dark', 'light'].includes(scheme)) {
      document.body.setAttribute(ATTR_KEY, scheme);
      this.theme = scheme;
      logInfo(`Theme switched to ${scheme} mode`);
    }
  }

  /**
   * @public
   * switch theme
   */
  switchTheme() {
    const nowTheme = this.getRenderedTheme();
    const targetTheme = nowTheme === 'light' ? 'dark' : 'light';
    if (targetTheme === this.getCSSTheme()) {
      // if target is css prefer, back to auto mode
      this.setTheme('auto');
      setLS(STORAGE_KEY, 'auto');
    } else {
      this.setTheme(targetTheme);
      setLS(STORAGE_KEY, targetTheme);
    }
  }
}

export { ThemeManager };
