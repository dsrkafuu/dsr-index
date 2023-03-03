import { RouteObject } from 'react-router';
import App from './layouts/App';
import Cover from './layouts/Cover';
import Home from './pages/Home';
import KataCode from './pages/KataCode';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Cover />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: () => ({
          meta: {
            title: 'Home',
          },
        }),
      },
    ],
  },
  {
    path: 'app',
    element: <App />,
    children: [
      {
        path: 'katacode',
        element: <KataCode />,
        handle: () => ({
          meta: {
            title: 'KataCode',
          },
        }),
      },
    ],
  },
];

export default routes;
