/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import htmlEnv from 'vite-plugin-html-env';
import { visualizer } from 'rollup-plugin-visualizer';

const NODE_ENVS: any = process.env || {};

/**
 * https://vitejs.dev/config/
 */
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      $config: path.resolve(__dirname, './config.json'),
    },
  },
  plugins: [
    splitVendorChunkPlugin(),
    htmlEnv({ ...NODE_ENVS }),
    react(),
    svgr(),
    visualizer(),
  ],
  build: {
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },
});
