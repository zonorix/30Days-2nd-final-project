module.exports = {
  extends: ['google', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'no-var': 'error',
    'no-console': 'off',
    'require-jsdoc': 'off',
  },
};
