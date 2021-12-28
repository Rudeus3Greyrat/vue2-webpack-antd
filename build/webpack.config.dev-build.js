const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const devConfig = require('../config/dev.env');
const config = require('../config/index');

module.exports = merge(baseConfig,{
  mode: "none",
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': devConfig
    }),
  ],
  output: {
    ...config.output
  }
})