const { getESLintConfig } = require('@dsrca/config');

module.exports = getESLintConfig('next', {
  rules: {
    '@typescript-eslint/ban-types': 'off',
    'react/prop-types': 'off',
  },
});
