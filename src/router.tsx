/* eslint-disable @typescript-eslint/no-explicit-any */
import { Params, RouteObject, useMatches } from 'react-router';
import App from './layouts/App';
import Cover from './layouts/Cover';
import Home from './pages/Home';
import KataCode from './pages/KataCode';

export interface RouteMeta {
  title?: string;
  layout?: boolean;
}

export interface RouteProps {
  meta?: RouteMeta;
}

export interface RouteMatch {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: unknown;
  meta: RouteMeta;
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Cover />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: () => ({
          meta: {
            title: 'DSRKafuU',
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
            title: 'KataCode | DSRKafuU',
          },
        }),
      },
    ],
  },
];

export function useExactMatch(): RouteMatch {
  const matches = useMatches();
  // unmatched
  if (!matches.length) {
    throw new Error('Error matching app route');
  }
  // get route props
  const current = matches[matches.length - 1];
  const match = { ...current };
  if (typeof current.handle === 'function') {
    const props: RouteProps = current.handle();
    Object.assign(match, props);
  }
  return match as any;
}
