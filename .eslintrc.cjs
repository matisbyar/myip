/*
 * Copyright (C) 2023 Matis Byar. - All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file, in source or binary forms, via any medium,
 * is strictly prohibited.
 *
 * For inquiries or licensing options, please contact:
 * matis@byar.fr
 */

/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
