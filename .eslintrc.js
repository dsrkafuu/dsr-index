const { getESLintConfig } = require('@dsrca/config');

module.exports = getESLintConfig('next', {
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 'off',
  },
});
