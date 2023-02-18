import styles from './App.module.scss';
import { Outlet } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Layout } from 'antd';
import { useExactMatch } from '../router';

function App() {
  const match = useExactMatch();

  return (
    <>
      <Helmet>
        <title>{match.meta.title || 'DSRKafuU'}</title>
      </Helmet>
      <Layout className={styles.layout}>
        <Layout.Header>Header</Layout.Header>
        <Layout>
          <Layout.Sider>Sider</Layout.Sider>
          <Layout.Content>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
