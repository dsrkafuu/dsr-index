import config from '../../config.json';

export type Config = typeof config;

export const getConfig = () => {
  const data = config;
  if (process.env.NODE_ENV !== 'development' && process.env.HOME_APPS === '0') {
    data.apps = false;
  }
  return data as Config;
};
