import styles from './Cover.module.scss';
import { Outlet } from 'react-router';
import { useExactMatch } from '@/hooks';
import Head from '@/components/Head';

function Cover() {
  const {
    meta: { title },
  } = useExactMatch();

  return (
    <>
      <Head title={title} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Cover;
