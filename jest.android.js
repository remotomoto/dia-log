const baseConfig = require('./jest.base.json');

module.exports = {
  ...baseConfig,
  haste: {
    defaultPlatform: 'android',
    platforms: ['android', 'ios', 'native'],
  },
};
