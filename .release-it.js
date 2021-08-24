module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    requireBranch: 'master',
    requireCommits: 'true',
  },
  npm: {
    publish: false,
  },
  github: {
    release: true,
    assets: ['output/*.pdf'],
    releaseName: 'v${version}',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md',
    },
  },
  hooks: {
    'after:bump': 'yarn build && yarn pages && yarn pdf',
  },
};
