module.exports = {
  '*': ['prettier --check --ignore-unknown --write', 'git add'],
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json --noEmit',
  '*.md': [
    'remark --frail --use validate-links --use remark-lint-no-dead-urls --use remark-lint-no-url-trailing-slash',
  ],
  '*.{js,jsx,ts,tsx,md,mdx}': [
    'eslint --ext js,jsx,ts,tsx,md,mdx --max-warnings 0',
    'jest --bail --findRelatedTests',
  ],
}
