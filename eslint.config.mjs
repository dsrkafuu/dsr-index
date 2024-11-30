import config from '@dsrca/config/eslint/next.config.js';

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
export default [
  ...config,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    ignores: [
      '.next/**/*',
      '.vercel/**/*',
      'build/**/*',
      'legacy/**/*',
      'node_modules/**/*',
      'out/**/*',
      '.DS_Store',
      '.env*.local',
      'next-env.d.ts',
      'pnpm-lock.yaml',
      '*.tsbuildinfo',
    ],
  },
];
