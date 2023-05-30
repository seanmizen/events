module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
      env: {
        node: true,
        jest: true,
      },
      rules: {
        semi: ['error', 'never'],
        'max-len': ['error', { code: 120, ignoreUrls: true }],
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/semi': 'off',
      },
    },
  ],
}
