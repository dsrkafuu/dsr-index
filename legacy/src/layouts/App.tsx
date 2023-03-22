import styles from './App.module.scss';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { theme, Layout, Menu, Button } from 'antd';
import { useExactMatch } from '@/hooks';
import Head from '@/components/Head';
import { IBars, ICode, IHouse } from '@/icons';

const menuItems = [
  { path: '/', name: 'Home', icon: <IHouse /> },
  { path: '/app/katacode', name: 'KataCode', icon: <ICode /> },
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

  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Head title={title} />
      <Layout className={styles.layout}>
        <Layout.Sider
          theme='light'
          style={{ boxShadow: boxShadowTertiary }}
          collapsed={collapsed}
          collapsedWidth={56}
        >
          {!collapsed && <div className={styles.site}>DSRKafuU</div>}
          <Menu
            className={styles.menu}
            theme='light'
            selectedKeys={[pathname]}
            items={menuItems.map(({ path, name, icon }) => {
              return {
                key: path,
                label: name,
                icon,
                onClick: () => navigate(path),
              };
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
            <Button
              type='text'
              icon={<IBars />}
              onClick={() => setCollapsed((v) => !v)}
            />
            <h2 className={styles.title}>{title}</h2>
          </Layout.Header>
          <Layout.Content className={styles.content}>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
