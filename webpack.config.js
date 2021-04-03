require('dotenv').config();

// deps
const path = require('path');
const childProcess = require('child_process');
const webpack = require('webpack');
const package = require('./package.json');
// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// constants
const BASE_PATH = '/';
const CDN_BASE_PATH = 'https://cdn.jsdelivr.net/gh/dsrkafuu/dsr-cdn@1/';
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
const PKG_VERSION = package.version;
const COMMIT_HASH = childProcess.execSync('git rev-parse --short HEAD').toString();

module.exports = {
  mode: process.env.NODE_ENV,
  // set entry and output dist
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:6].js',
    publicPath: BASE_PATH,
  },
  resolve: {
    alias: { '@': path.resolve('src') },
  },
  // do not extract `LICENSE.txt`
  optimization: {
    minimizer: [new TerserWebpackPlugin({ extractComments: false })],
  },

  module: {
    rules: [
      // babel
      {
        test: /\.m?js$/i,
        exclude: /node_modules/i,
        loader: 'babel-loader',
      },
      // export css
      {
        test: /\.s?[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // html template
      {
        test: /\.ejs$/i,
        loader: 'ejs-loader',
        options: {
          esModule: false, // load ejs as cjs modules
        },
      },
      // inline svg required in html template
      {
        test: /\.svg$/,
        type: 'asset/source', // migrated from `raw-loader`
      },
      // files
      {
        test: /\.(jpe?g|png|gif|ico|webp|woff2?)$/i,
        exclude: /src\/cdn/i,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash:6].[ext]',
          outputPath: 'assets',
        },
      },
      // cdn files
      {
        test: /\.(jpe?g|png|gif|ico|webp|woff2?)$/i,
        include: /src\/cdn/i,
        loader: 'file-loader',
        options: {
          emitFile: true,
          context: 'src/cdn', // set base path to `src/cdn/`
          name: `[path][name].[ext]`, // no hash needed
          publicPath: process.env.NODE_ENV === 'development' ? BASE_PATH : CDN_BASE_PATH,
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
      __webpack_BASE__: JSON.stringify(BASE_PATH), // base path
      __webpack_VERSION__: JSON.stringify(PKG_VERSION), // build version from `package.json`
      __webpack_HASH__: JSON.stringify(COMMIT_HASH), // commit hash from `git rev-parse --short HEAD`
      __webpack_GA__: JSON.stringify(process.env.GA), // google analytics ua
      __webpack_HOST__: JSON.stringify(process.env.HOST), // allow hosts split with `,`
      __webpack_ICP__: JSON.stringify(process.env.ICP), // icp number
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
    new CopyWebpackPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],

  devServer: {
    contentBase: 'dist',
    compress: true,
    port: 9000,
    historyApiFallback: {
      rewrites: [{ from: /^\/.*/, to: '/404.html' }],
    },
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
};
