import styles from './App.module.scss';
import { Outlet, useNavigate } from 'react-router';
import { theme, Layout, Menu } from 'antd';
import { useExactMatch } from '@/hooks';
import Head from '@/components/Head';

const menuItems = [
  { path: '/', name: 'Home' },
  { path: '/app/katacode', name: 'KataCode' },
];

function App() {
  const {
    token: { colorBgContainer, boxShadowTertiary },
  } = theme.useToken();

  const {
    pathname,
    meta: { title },
  } = useExactMatch();
  const navigate = useNavigate();

  return (
    <>
      <Head title={title} />
      <Layout className={styles.layout}>
        <Layout.Sider theme='light' style={{ boxShadow: boxShadowTertiary }}>
          <div className={styles.site}>DSRKafuU</div>
          <Menu
            className={styles.menu}
            theme='light'
            selectedKeys={[pathname]}
            items={menuItems.map(({ path, name }) => {
              return { key: path, label: name, onClick: () => navigate(path) };
            })}
          />
        </Layout.Sider>
        <Layout>
          <Layout.Header
            className={styles.header}
            style={{
              background: colorBgContainer,
              boxShadow: boxShadowTertiary,
            }}
          >
            {title}
          </Layout.Header>
          <Layout.Content>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
