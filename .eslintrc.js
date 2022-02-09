// https://eslint.org/docs/user-guide/configuring
module.exports = {
  env: {
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    // "standard",
    // "plugin:vue/vue3-essential",
    'plugin:vue/base',
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  rules: {
    'vue/script-setup-uses-vars': 'error',
    "vue/multi-word-component-names": "off",
    "no-unused-vars": "warn",
    "no-debugger": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    // 要求箭头函数的参数使用圆括号 (arrow-parens)
    'arrow-parens': 0,
    // 强制 generator 函数中 * 号周围有空格 (generator-star-spacing)
    'generator-star-spacing': 0,
    // 强制一致使用反引号，双引号或单引号（引号）
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    // 不允许使用不必要的分号
    'no-extra-semi': 'error',
    // 允许多行式的末尾逗号
    'comma-dangle': ['error', 'only-multiline'],
    // 空行数限制
    'no-multiple-empty-lines': [1, {'max': 1}],
  },
};