module.exports = {
    env: {
      node: true
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
      version: 2018,
      browser: true
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
      'prettier/prettier': ['error']
    }
  };