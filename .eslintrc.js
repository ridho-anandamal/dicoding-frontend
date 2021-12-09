module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'operator-linebreak': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'space-before-function-paren': 'off',
    'no-restricted-globals': 'off',
    'consistent-return': 'off',
    'no-prototype-builtins': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  plugins: ['jasmine'],
};
