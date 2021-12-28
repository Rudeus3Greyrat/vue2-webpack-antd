'use strict';

const path = require('path');
const utils = require('../build/utils');

module.exports = {
  dev: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host: 'localhost',
    port: 9001,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: utils.assetsPath('js/[name].[contenthash:6].js'),
    chunkFilename: utils.assetsPath('js/[name].[contenthash:6].js')
  }
};
