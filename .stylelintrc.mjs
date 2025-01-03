/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-no-unsupported-browser-features'],
  overrides: [
    {
      files: ['**/*.scss'],
      rules: {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            severity: 'warning',
            ignorePartialSupport: true,
            ignore: [
              'css-nesting',
              'css-when-else',
              'css-animation',
              'border-radius',
            ],
          },
        ],
      },
    },
  ],
}
