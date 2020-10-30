const Config = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'scope-empty': [2, 'never'],
    // 'references-empty': [2, 'never'],
    'header-max-length': [2, 'always', 150],
  },
  defaultIgnores: true,
  parserOpts: {
    headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['DL-'],
    },
  },
};

module.exports = Config;
