import { env } from 'node:process'

const config = {
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
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@sebbo2002/semantic-release-jsr',
    '@anolilab/semantic-release-pnpm',
  ],
}

if (env.BRANCH === 'main') {
  config.plugins.push('@semantic-release/github')
}

export default config
