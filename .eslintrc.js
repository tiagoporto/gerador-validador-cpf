const jsConfig = {
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
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
  extendsMD: ['eslint:recommended', 'standard'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-nested-ternary': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/lowercase-name': [
      'error',
      {
        ignoreTopLevelDescribe: true,
      },
    ],
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkDefaultAndNamespaceImports: false,
        extendDefaultReplacements: false,
        replacements: {
          cb: {
            callback: true,
          },
          ctx: {
            context: true,
          },
          cur: {
            current: true,
          },
          curr: {
            current: true,
          },
          e: {
            error: true,
            event: true,
          },
          el: {
            element: true,
          },
          elem: {
            element: true,
          },
          err: {
            error: true,
          },
          ev: {
            event: true,
          },
          evt: {
            event: true,
          },
          fn: {
            function: true,
          },
          idx: {
            index: true,
          },
          len: {
            length: true,
          },
          rel: {
            related: true,
            relationship: true,
            relative: true,
          },
          ver: {
            version: true,
          },
        },
      },
    ],
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
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  extendsInMD: [...jsConfig.extendsMD, 'plugin:@typescript-eslint/recommended'],
  rules: {
    ...jsConfig.rules,
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
    'prettier/react',
    'plugin:testing-library/react',
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
  ignorePatterns: [],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@i18n', './src/site/locales/en'],
          ['!!@i18nResources', './src/site/locales'],
        ],
      },
    },
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
      extends: [...jsConfig.extends],
      rules: { ...jsConfig.rules, ...jsConfig.rulesTest },
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
      parser: '@typescript-eslint/parser',
      extends: [...tsConfig.extends],
      rules: { ...tsConfig.rules },
    },
    // .ts in test files
    {
      files: ['**/*.test.ts'],
      parser: '@typescript-eslint/parser',
      extends: [...tsConfig.extends],
      rules: { ...tsConfig.rules, ...tsConfig.rulesTest },
    },
    // .ts in Markdown files
    {
      files: ['**/*.{md,mdx}/*.{ts,typescript}'],
      parser: '@typescript-eslint/parser',
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
      extends: [...jsConfig.extends, ...reactConfig.extends],
      rules: {
        ...jsConfig.rules,
        ...jsConfig.rulesTest,
        ...reactConfig.rules,
        ...reactConfig.rulesTest,
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
      parser: '@typescript-eslint/parser',
      extends: [...reactConfig.extends, ...tsConfig.extends],
      rules: {
        ...tsConfig.rules,
        ...reactConfig.rules,
      },
    },
    // .tsx in test files
    {
      files: ['**/*.test.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [...reactConfig.extends, ...tsConfig.extends],
      rules: {
        ...tsConfig.rules,
        ...tsConfig.rulesTest,
        ...reactConfig.rules,
        ...reactConfig.rulesTest,
      },
    },
    // .tsx in Markdown files
    {
      files: ['**/*.{md,mdx}/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [...reactConfig.extendsMD, ...tsConfig.extendsInMD],
      rules: {
        ...tsConfig.rulesMD,
        ...reactConfig.rulesMD,
      },
    },
  ],
}
