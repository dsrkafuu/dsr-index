import { BASE_URL } from '../utils/constants';

export default () => {
  const path = window.location.pathname;
  const basePath = new URL(BASE_URL).pathname;
  if (path !== basePath) {
    console.log('404 Not Found');
  }
};
