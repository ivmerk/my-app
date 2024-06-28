// eslint.config.js

import js from '@eslint/js';
import airbnb from 'eslint-config-airbnb';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  airbnb,
  {
    plugins: {
      react,
      'react-native': reactNative,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    rules: {
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'error',
      'react-native/no-color-literals': 'error',
      'react-native/no-raw-text': 'error',
    },
  },
];

