import './main.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { routes } from './router';

const router = createBrowserRouter(routes);

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontSize: 15,
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Noto Sans SC', 'Noto Sans JP', sans-serif",
          fontFamilyCode:
            "'Fira Code', 'Noto Sans SC', 'Noto Sans JP', monospace",
          colorPrimary: '#7793cc',
        },
      }}
    >
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ConfigProvider>
  </StrictMode>
);
