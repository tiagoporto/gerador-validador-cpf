const parser = '@typescript-eslint/parser'
const parserOptions = {
  projectService: true,
  tsconfigRootDir: __dirname,
}

const testConfig = {
  extends: [
    'plugin:jest/all',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
    'jest/max-expects': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-lowercase-title': [
      'error',
      {
        ignoreTopLevelDescribe: true,
      },
    ],
  },
}

const jsConfig = {
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
    'plugin:jsdoc/recommended',
    'plugin:sonarjs/recommended-legacy',
    'standard',
    'prettier',
  ],
  extendsMD: ['eslint:recommended', 'standard'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'unknown',
          ['parent', 'sibling', 'index'],
          'object',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        distinctGroup: false,

        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        named: true,
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-void': ['error', { allowAsStatement: true }],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-nested-ternary': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': ['off'],
  },
  rulesMD: {
    'no-unused-vars': 'off',
  },
  rulesTest: {
    'unicorn/no-null': 'off',
  },
}

const tsConfig = {
  extends: [
    ...jsConfig.extends,
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  extendsInMD: [
    ...jsConfig.extendsMD,
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  rules: {
    ...jsConfig.rules,
    'import/no-unresolved': ['error', { ignore: ['\\.js$'] }],

    '@typescript-eslint/no-floating-promises': [
      'error',
      { ignoreVoid: true, ignoreIIFE: true },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description' },
    ],
  },
  rulesMD: {
    ...jsConfig.rulesMD,
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  rulesTest: {
    ...jsConfig.rulesTest,
  },
}

const reactConfig = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  extendsMD: ['plugin:react/recommended'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  rulesMD: {},
  rulesTest: {
    'react/display-name': 'off',
  },
}

module.exports = {
  ignorePatterns: ['dist', '!.*.mjs', 'coverage', 'webpack.config.*'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    'jest/globals': true,
  },
  plugins: [
    'testing-library',
    'react',
    'react-hooks',
    'jsx-a11y',
    'promise',
    'unicorn',
    'import',
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
      rules: {
        'json/*': ['error', { allowComments: true }],
      },
    },
    // .js files
    {
      files: ['*.{js,mjs}'],
      excludedFiles: ['**/*.{md,mdx}/*.{js,mjs,javascript}', '**/*.test.js'],
      extends: [...jsConfig.extends],
      rules: { ...jsConfig.rules },
    },
    // .js in test files
    {
      files: ['**/*.test.js'],
      extends: [...jsConfig.extends, ...testConfig.extends],
      rules: {
        ...jsConfig.rules,
        ...jsConfig.rulesTest,
        ...testConfig.rules,
      },
    },
    // .js in Markdown files
    {
      files: ['**/*.{md,mdx}/*.{js,mjs,javascript}'],
      extends: [...jsConfig.extendsMD],
      rules: { ...jsConfig.rulesMD },
    },
    // .ts files
    {
      files: ['*.ts'],
      excludedFiles: ['**/*.{md,mdx}/*.{ts,typescript}', '**/*.test.ts'],
      parser,
      parserOptions,
      extends: [...tsConfig.extends],
      rules: { ...tsConfig.rules },
    },
    // .ts in test files
    {
      files: ['**/*.test.ts'],
      parser,
      parserOptions,
      extends: [...tsConfig.extends, ...testConfig.extends],
      rules: { ...tsConfig.rules, ...tsConfig.rulesTest, ...testConfig.rules },
    },
    // .ts in Markdown files
    {
      files: ['**/*.{md,mdx}/*.{ts,typescript}'],
      parser,
      parserOptions,
      extends: [...tsConfig.extendsInMD],
      rules: { ...tsConfig.rulesMD },
    },
    // .jsx files
    {
      files: ['*.jsx'],
      excludedFiles: ['**/*.{md,mdx}/*.jsx', '**/*.test.jsx'],
      extends: [...jsConfig.extends, ...reactConfig.extends],
      rules: { ...jsConfig.rules, ...reactConfig.rules },
    },
    // .jsx in test files
    {
      files: ['**/*.test.jsx'],
      extends: [
        ...jsConfig.extends,
        ...reactConfig.extends,
        ...testConfig.extends,
      ],
      rules: {
        ...jsConfig.rules,
        ...jsConfig.rulesTest,
        ...reactConfig.rules,
        ...reactConfig.rulesTest,
        ...testConfig.rules,
      },
    },
    // .jsx in Markdown files
    {
      files: ['**/*.{md,mdx}/*.jsx'],
      extends: [...jsConfig.extendsMD, ...reactConfig.extendsMD],
      rules: { ...jsConfig.rulesInMd, ...reactConfig.rulesMD },
    },
    // .tsx files
    {
      files: ['*.tsx'],
      excludedFiles: ['**/*.{md,mdx}/*.tsx', '**/*.test.tsx'],
      parser,
      parserOptions,
      extends: [...reactConfig.extends, ...tsConfig.extends],
      rules: {
        ...tsConfig.rules,
        ...reactConfig.rules,
      },
    },
    // .tsx in test files
    {
      files: ['**/*.test.tsx'],
      parser,
      parserOptions,
      extends: [
        ...reactConfig.extends,
        ...tsConfig.extends,
        ...testConfig.extends,
      ],
      rules: {
        ...tsConfig.rules,
        ...tsConfig.rulesTest,
        ...reactConfig.rules,
        ...reactConfig.rulesTest,
        ...testConfig.rules,
      },
    },
    // .tsx in Markdown files
    {
      files: ['**/*.{md,mdx}/*.tsx'],
      parser,
      parserOptions,
      extends: [...reactConfig.extendsMD, ...tsConfig.extendsInMD],
      rules: {
        ...tsConfig.rulesMD,
        ...reactConfig.rulesMD,
      },
    },
  ],
}
