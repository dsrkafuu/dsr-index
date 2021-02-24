/**
 * log information
 * @param {...any} args
 */
export function logInfo(...args) {
  console.info('[dsr-index]', ...args);
}

/**
 * log errors
 * @param {...any} args
 */
export function logError(...args) {
  console.error('[dsr-index]', ...args);
}
