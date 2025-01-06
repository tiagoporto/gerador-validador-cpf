/** @type {import('stylelint').Config} */
export default {
  extends: ['@tiagoporto/stylelint-config'],
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
