module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended'
  ],
  rules:{
    'max-line-length': null,
    'function-url-quotes': 'never',
    'prettier/prettier': [true, { 'singleQuote': false, 'useTabs': true }],
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  }
};