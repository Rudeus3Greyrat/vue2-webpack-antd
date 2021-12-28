const webpack = require('webpack');
const { merge } = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCss =  require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('../config/index');
const baseConfig = require('./webpack.config.base');
const prodConfig = require('../config/prod.env');

module.exports = merge(baseConfig,{
  mode: "production",
  optimization: {
    minimizer: [
      new OptimizeCss(),
      new UglifyJsPlugin({
        sourceMap: true,
        include: /\/includes/,
        cache: true
      }),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 4, // 在初始化加载时，请求数量大于4
      name: false,  // 代码块的名字，设置为true则表示根据模块和缓存组秘钥自动生成, 实现固化 chunkId，保持缓存的能力
      cacheGroups: {
        // 处理入口chunk
        vendor: {
          test: /node_modules\/(.*)\.js/,
          name: 'vendor',
          chunks: 'initial',
          minChunks: 1,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100,
          reuseExistingChunk: false,
        },
        // 处理异步chunk
        'async-vendors': {
          test: /node_modules\/(.*)\.js/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors',
        },
        styles: {
          test: /\.(scss|less|css)$/,
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true
        },
      }
    },
    runtimeChunk: {
      name: 'manifest',
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': prodConfig
    }),
    new BundleAnalyzerPlugin({ analyzerPort: 9001 }),
    new webpack.LoaderOptionsPlugin({
      options: {
        configureWebpack: {
          performance: {
            hints:'warning',
            maxEntrypointSize: 50000,
            maxAssetSize: 30000,
            assetFilter: function(assetFilename) {
              return assetFilename.endsWith('.js');
            }
          }
        }
      }
    })
  ],
  output: {
    ...config.output
  }
})