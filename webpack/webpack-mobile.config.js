// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('./webpack-base.config');

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, '../mobile/www'),
  }
};