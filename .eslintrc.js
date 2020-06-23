module.exports = {
  extends: ['google', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  rules: {
    'no-var': 'error',
    'no-console': 'off',
    'require-jsdoc': 'off',
  },
};
