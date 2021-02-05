// `.env`
require('dotenv').config();
// deps
const path = require('path');
const childProcess = require('child_process');
const webpack = require('webpack');
// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * @param {Object} env env from webpack
 */
module.exports = (env) => {
  const BASE_PATH = '/';
  const CDN_BASE_PATH = 'https://cdn.jsdelivr.net/gh/amzrk2/dsr-cdn@1.0/';
  const HTML_SETTINGS = {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    ignoreCustomComments: [/^!/, /^\s*#/],
    keepClosingSlash: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true,
  };
  const PKG_VERSION = require('./package.json').version;
  const COMMIT_HASH = childProcess.execSync('git rev-parse --short HEAD').toString();

  return {
    mode: env.development ? 'development' : 'production',
    // set entry and output dist
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash:6].js',
      publicPath: BASE_PATH,
    },
    // do not extrace `LICENSE.txt`
    optimization: {
      minimizer: [new TerserWebpackPlugin({ extractComments: false })],
    },
    // add ts support
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        // babel
        {
          test: /\.[jt]s$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // export css
        {
          test: /\.s?[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        // html template
        {
          test: /\.ejs$/,
          loader: 'ejs-loader',
          options: { esModule: false },
        },
        // inline svg required in html template
        {
          test: /\.svg$/,
          // migrated from `raw-loader`
          type: 'asset/source',
        },
        // files
        {
          test: /\.(jpe?g|png|gif|webp|ico|woff2?)$/i,
          loader: 'file-loader',
          options: {
            esModule: false,
            // output to dist/* with same path as src/*
            context: 'src',
            // remove hash when using cdn in production
            name: `[path][name]${env.development ? '.[contenthash:6]' : ''}.[ext]`,
            publicPath: env.development ? BASE_PATH : CDN_BASE_PATH,
          },
        },
      ],
    },
    plugins: [
      // for ejs-loader
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
      // global variables
      new webpack.DefinePlugin({
        // build version from `package.json`
        __webpack_VERSION__: JSON.stringify(PKG_VERSION),
        // commit hash from `git rev-parse --short HEAD`
        __webpack_HASH__: JSON.stringify(COMMIT_HASH),
        // google analytics ua
        __webpack_GA__: JSON.stringify(process.env.GA),
        // allow hosts split with `,`
        __webpack_HOST__: JSON.stringify(process.env.HOST),
      }),
      // clean last built files
      new CleanWebpackPlugin(),
      // extract css files from loader
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:6].css',
      }),
      // create html files use `html-loader` and `svg-inline-loader`
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.ejs',
        minify: HTML_SETTINGS,
      }),
      // a 404.html fallback for github pages
      new HtmlWebpackPlugin({
        filename: '404.html',
        template: './src/index.ejs',
        minify: HTML_SETTINGS,
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'static' }],
      }),
    ],
    devServer: {
      contentBase: 'dist',
      compress: true,
      port: 9000,
      // fallback all 404 to 404.html like github pages
      historyApiFallback: {
        rewrites: [{ from: /^\/.*/, to: '/404.html' }],
      },
    },
    devtool: env.development ? 'source-map' : false,
  };
};
