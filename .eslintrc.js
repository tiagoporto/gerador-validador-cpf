const jsConfig = {
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:node/recommended',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    'plugin:testing-library/recommended',
    'plugin:jest/all',
    'plugin:jest-dom/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsdoc/recommended',
    'plugin:sonarjs/recommended',
    'standard',
    'prettier',
    'prettier/standard',
    'prettier/unicorn',
  ],
  extendsInMD: ['eslint:recommended', 'standard'],
  rules: {
    'jest/prefer-expect-assertions': 'off',
    'jest/lowercase-name': ['error', { ignore: ['describe'] }],
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'unicorn/filename-case': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
  },
  rulesInMD: {
    'no-unused-vars': 'off',
  },
}

const tsConfig = {
  extends: [
    ...jsConfig.extends,
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  extendsInMD: [
    ...jsConfig.extendsInMD,
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    ...jsConfig.rules,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  rulesInMd: {
    ...jsConfig.rulesInMD,
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
}

const reactConfig = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
  ],
  extendsInMD: ['plugin:react/recommended'],
  rules: {
    ...jsConfig.rules,
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  rulesInMd: {
    ...jsConfig.rulesInMD,
    'react/react-in-jsx-scope': 'off',
  },
}

module.exports = {
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'testing-library',
    'react',
    'react-hooks',
    'jsx-a11y',
    'promise',
    // 'unicorn',
    'import',
    'node',
    'jest',
    'jest-dom',
    'eslint-comments',
    'jsdoc',
    'sonarjs',
    '@typescript-eslint',
    'json',
    'mdx',
    'markdown',
  ],
  overrides: [
    // Markdown files
    {
      files: ['**/*.{md,mdx}'],
      parser: 'eslint-mdx',
      extends: ['plugin:markdown/recommended'],
      processor: 'markdown/markdown',
    },
    // .json in Markdown files
    {
      files: ['*.json'],
      extends: ['plugin:json/recommended'],
    },
    // .js files
    {
      files: ['*.js'],
      excludedFiles: ['**/*.{md,mdx}/*.{js,javascript}'],
      extends: [...jsConfig.extends],
      rules: { ...jsConfig.rules },
    },
    // .js in Markdown files
    {
      files: ['**/*.{md,mdx}/*.{js,javascript}'],
      extends: [...jsConfig.extendsInMD],
      rules: { ...jsConfig.rulesInMD },
    },
    // .ts files
    {
      files: ['*.ts'],
      excludedFiles: ['**/*.{md,mdx}/*.{ts,typescript}'],
      parser: '@typescript-eslint/parser',
      extends: [...tsConfig.extends],
      rules: { ...tsConfig.rules },
    },
    // .ts in Markdown files
    {
      files: ['**/*.{md,mdx}/*.{ts,typescript}'],
      parser: '@typescript-eslint/parser',
      extends: [...tsConfig.extendsInMD],
      rules: { ...tsConfig.rulesInMd },
    },
    // .jsx files
    {
      files: ['*.jsx'],
      excludedFiles: ['**/*.{md,mdx}/*.jsx'],
      extends: [...jsConfig.extends, ...reactConfig.extends],
      rules: { ...jsConfig.rules, ...reactConfig.rules },
    },
    // .jsx in Markdown files
    {
      files: ['**/*.{md,mdx}/*.jsx'],
      extends: [...jsConfig.extendsInMD, ...reactConfig.extendsInMD],
      rules: { ...jsConfig.rulesInMd, ...reactConfig.rulesInMd },
    },
    // .tsx files
    {
      files: ['*.tsx'],
      excludedFiles: ['**/*.{md,mdx}/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [...reactConfig.extends, ...tsConfig.extends],
      rules: {
        ...tsConfig.rules,
        ...reactConfig.rules,
      },
    },
    // .tsx in Markdown files
    {
      files: ['**/*.{md,mdx}/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [...reactConfig.extendsInMD, ...tsConfig.extendsInMD],
      rules: {
        ...tsConfig.rulesInMd,
        ...reactConfig.rulesInMd,
      },
    },
  ],
}
