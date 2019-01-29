module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  extends: ['plugin:import/recommended', 'airbnb-base', 'prettier'],
  plugins: ['babel'],
  rules: {
    // Buggy stuff
    'linebreak-style': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',

    // Our own rules
    'no-underscore-dangle': 'off',
    'no-eval': 'off',
    'no-return-assign': 'off',
    'no-nested-ternary': 'off',
    'no-shadow': 'off',
    'import/no-named-as-default': 'off',
    'no-restricted-syntax': 'off', // Allow for...of loop

    // Airbnb's using warn
    'no-alert': 'error',
    'no-console': 'off',

    // Airbnb's using error
    'consistent-this': ['error', 'self'],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
      },
    ],
    'prefer-destructuring': 'off',
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'operator-linebreak': 'off',
    'import/namespace': ['error', { allowComputed: true }],
    'import/order': [
      'error',
      {
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin']],
        'newlines-between': 'never',
      },
    ],
  },
};
