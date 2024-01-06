// .eslintrc.js

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // 自定义规则可以在这里添加
  },
};
