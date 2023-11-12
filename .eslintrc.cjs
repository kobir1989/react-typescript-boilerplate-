module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-refresh',
    'jsx-a11y',
    'react',
    'react-hooks',
    'prettier'
  ],
  rules: {
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-vars': 'error',
    'jsx-a11y/role-has-required-aria-props': 2,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
