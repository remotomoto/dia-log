const baseConfig = require('./jest.base.json');

module.exports = {
  ...baseConfig,
  testPathIgnorePatterns: ['node_modules', '.*\\.android\\..*'],
};
