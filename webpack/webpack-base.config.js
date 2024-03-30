const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      { test: /\.(js|jsx|tsx|ts)$/, loader: 'ts-loader' },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html',
      favicon: 'static/favicon.png'
    })
  ],
  target: 'web',
  mode: 'development',
  devServer: {
    static: './dist'
  }
};