const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const BASE_PATH = '/';
  const CDN_BASE_PATH = 'https://cdn.jsdelivr.net/gh/amzrk2/dsr-cdn@1/';
  const HTML_SETTINGS = env.production
    ? {
        // custom
        collapseBooleanAttributes: true,
        ignoreCustomComments: [/^!/, /^\s*#/],
        // html-webpack-plugin default
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      }
    : false;

  return {
    // set entry and output dist
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash:6].js',
      publicPath: BASE_PATH,
    },
    optimization: {
      minimizer: [new TerserWebpackPlugin({ extractComments: false })],
    },
    module: {
      rules: [
        // css & scss
        {
          test: /\.s?[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        // inline svg required in html template
        {
          test: /\.svg$/,
          loader: 'raw-loader',
          options: {
            esModule: false,
          },
        },
        // html template
        {
          test: /\.ejs$/,
          loader: 'ejs-loader',
          options: {
            esModule: false,
          },
        },
        // files
        {
          test: /\.(jpe?g|png|gif|webp|ico|woff2?|[to]tf)$/i,
          loader: 'file-loader',
          options: {
            // prevent no default issue
            esModule: false,
            // output to dist/* with same path as src/*
            context: 'src',
            // remove hash when using cdn
            name: `[path][name]${env.production ? '' : '.[contenthash:6]'}.[ext]`,
            publicPath: env.production ? CDN_BASE_PATH : BASE_PATH,
          },
        },
      ],
    },
    plugins: [
      // for ejs-loader
      new webpack.ProvidePlugin({
        _: 'lodash',
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
    devtool: env.production ? false : 'source-map',
  };
};
