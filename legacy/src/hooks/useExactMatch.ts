import { useMatches } from 'react-router';

function useExactMatch(): RouteMatch {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return match as any;
}

export default useExactMatch;
