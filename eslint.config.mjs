import globals from 'globals';
import pluginJs from '@eslint/js';
import googleConfig from 'eslint-config-google';

export default [
  {ignores: ['node_modules', 'mochawesome-report']},
  {files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  {
    ...googleConfig,
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      ...googleConfig.rules,
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
      'linebreak-style': 'off',
    },
  },
];
