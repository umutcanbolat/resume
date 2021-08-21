module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
