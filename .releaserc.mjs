export default {
  extends: 'semantic-release-monorepo',
  tagFormat: `${process.env.npm_package_name}@\${version}`,
  branches: [
    'main',
    {
      name: 'alpha',
      channel: 'alpha',
      prerelease: true,
    },
    {
      name: 'beta',
      channel: 'beta',
      prerelease: true,
    },
  ],
  preset: 'conventionalcommits',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            type: 'docs',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'minor',
          },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@sebbo2002/semantic-release-jsr',
    '@anolilab/semantic-release-pnpm',
    '@semantic-release/github',
  ],
}
