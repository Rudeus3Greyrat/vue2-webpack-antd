const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base');
const devConfig = require('../config/dev.env');

module.exports = merge(baseConfig,{
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: 'localhost',
    port: 9000,
    hot: true,
    open: true,
    clientLogLevel: 'warning',
    overlay: { warnings: false, errors: true },
    proxy: {},
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': devConfig
    })
  ]
})