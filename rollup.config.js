import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

import pkg from './package.json';

// env replace
const replaced = {};
for (let key of Object.keys(process.env)) {
  replaced[`process.env.${key}`] = JSON.stringify(process.env[key]);
  replaced[`import.meta.env.${key}`] = JSON.stringify(process.env[key]);
}

// setup plugins
const plugins = [
  replace({
    preventAssignment: false, // allow assignment
    values: replaced,
  }),
  nodeResolve(),
  commonjs(),
  babel({
    babelHelpers: 'runtime',
    exclude: '**/node_modules/**', // fix must use the runtime plugin error
  }),
  terser(),
];

// settings
const outputs = {
  format: 'iife',
  sourcemap: process.env.NODE_ENV === 'development',
};

export default {
  input: 'assets/js/main.js',
  output: { file: `public/_assets/main_v${pkg.version}.min.js`, ...outputs },
  plugins,
};
