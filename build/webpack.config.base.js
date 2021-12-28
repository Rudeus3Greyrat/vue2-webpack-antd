const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': utils.resolve('src'),
      '@ant-design/icons/lib/dist$': utils.resolve('src/assets/antdv/icons.js')
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: utils.resolve('public/index.html'),
      filename: 'index.html',
      title: 'EDU'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: utils.processDevMode() ? utils.assetsPath('css/[name].css') : utils.assetsPath('css/[name].[contenthash:6].css'),
      chunkFilename: utils.processDevMode() ? utils.assetsPath('css/[name].css') : utils.assetsPath('css/[name].[contenthash:6].css')
    }),
    new CopyPlugin({
      patterns: [
        {
          from: utils.resolve('static'),
          to: utils.resolve('dist/static'),
          toType: 'dir'
        }
      ]
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css/,
        use: [
          utils.processDevMode() ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 3000,
      //         esModule: false,
      //         fallback: require.resolve('file-loader')
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash:6].[ext]',
              esModule: false,
              outputPath: utils.assetsPath('images')
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          utils.processDevMode() ? 'style-loader': MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: utils.processDevMode() ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {},
                javascriptEnabled: true,
              }
            }
          }
        ],
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}