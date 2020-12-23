import { setLS, getLS } from './utils/storage.js';
import { logInfo } from './utils/logger.js';

const ATTR_KEY = 'data-theme';
const STORAGE_KEY = 'dsr-index_theme';

class ThemeManager {
  constructor() {
    this.theme = getLS(STORAGE_KEY) || 'auto';
    if (this.theme !== 'auto' && this.theme !== this.getCSSScheme()) {
      this.setTheme(this.theme);
    }
  }

  /**
   * @private
   * get css prefer scheme
   */
  getCSSScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * @private
   * set theme
   * @param {String} theme
   */
  setTheme(theme) {
    if (['auto', 'dark', 'light'].includes(theme)) {
      document.body.setAttribute(ATTR_KEY, theme);
      this.theme = theme;
      logInfo(`Theme switched to ${theme}`);
    }
  }

  /**
   * @public
   * switch theme
   */
  switch() {
    let nowScheme;
    if (this.theme === 'auto') {
      nowScheme = this.getCSSScheme();
    } else {
      nowScheme = this.theme;
    }
    const targetScheme = nowScheme === 'light' ? 'dark' : 'light';
    if (targetScheme === this.getCSSScheme()) {
      // if target scheme is css prefer, back to auto theme
      this.setTheme('auto');
      setLS(STORAGE_KEY, 'auto');
    } else {
      this.setTheme(targetScheme);
      setLS(STORAGE_KEY, targetScheme);
    }
  }
}

export { ThemeManager };
