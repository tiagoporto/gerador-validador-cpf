import { env } from 'node:process'

const config = {
  extends: 'semantic-release-monorepo',
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
            release: 'minor',
          },
          {
            type: 'refactor',
            release: 'minor',
          },
        ],
      },
    ],
  ],
}

if (env.BRANCH === 'main') {
  config.plugins.push('@semantic-release/release-notes-generator')
}

config.plugins.push(
  '@sebbo2002/semantic-release-jsr',
  '@anolilab/semantic-release-pnpm',
)

if (env.BRANCH === 'main') {
  config.plugins.push('@semantic-release/github')
}

export default config
