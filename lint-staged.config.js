module.exports = {
  '*': 'prettier --check --ignore-unknown --write',
  '!(CHANGELOG).md':
    'remark --frail --use validate-links --use remark-lint-no-dead-urls --use remark-lint-no-url-trailing-slash',
  '*.{md,mdx}': 'eslint --ext md,mdx --max-warnings 0',
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json --noEmit',
  '*.{js,jsx,ts,tsx}': [
    'eslint --ext js,jsx,ts,tsx --max-warnings 0',
    'jest --bail --findRelatedTests',
  ],
}
