const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const testConfig = require('../config/test.env');
const config = require('../config/index');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(baseConfig,{
  mode: "none",
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': testConfig
    }),
    new BundleAnalyzerPlugin({ analyzerPort: 9001 }),
  ],
  output: {
    ...config.output
  }
})