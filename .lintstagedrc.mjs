export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.md': 'remark',
  '*.{md,mdx}': 'eslint --ext md,mdx --max-warnings 0',
  '*.{scss,css}': 'stylelint',
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json',
  '*.{js,mjs,jsx,ts,tsx}': [
    'eslint --ext js,mjs,jsx,ts,tsx --max-warnings 0',
    'jest --bail --findRelatedTests --passWithNoTests',
  ],
}
