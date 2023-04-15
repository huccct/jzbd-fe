module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'vue/no-unused-components': 'off',
    'vue/multi-word-component-names': 0,
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-default-prop': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/order-in-components': 'error',
    'vue/attributes-order': 'error',
    'vue/html-indent': ['error', 2],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ]
  }
};
