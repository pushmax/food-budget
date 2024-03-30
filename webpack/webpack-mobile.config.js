const path = require("path");
const baseConfig = require("./webpack-base.config");

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, '../mobile/www'),
  }
};