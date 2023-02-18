import styles from './Cover.module.scss';
import { Outlet } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useExactMatch } from '../router';

function Cover() {
  const match = useExactMatch();

  return (
    <>
      <Helmet>
        <title>{match.meta.title || 'DSRKafuU'}</title>
      </Helmet>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Cover;
