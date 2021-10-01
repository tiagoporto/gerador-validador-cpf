module.exports = {
  '*': 'prettier --check --ignore-unknown --write',
  '*.md': 'remark --frail',
  '*.{md,mdx}': 'eslint --ext md,mdx --max-warnings 0',
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json --noEmit',
  '*.{js,jsx,ts,tsx}': [
    'eslint --ext js,jsx,ts,tsx --max-warnings 0',
    'jest --bail --findRelatedTests',
  ],
}
