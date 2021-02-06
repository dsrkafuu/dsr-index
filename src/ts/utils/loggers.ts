/**
 * log information
 * @param {...any} args
 */
export function logInfo(...args: any[]) {
  console.info('[dsr-index]', ...args);
}

/**
 * log errors
 * @param {...any} args
 */
export function logError(...args: any[]) {
  console.error('[dsr-index]', ...args);
}
