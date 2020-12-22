const env = process.env.NODE_ENV || 'production';
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: env,
  // set entry and output dist
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:6].js',
    publicPath: '/',
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
      // files
      {
        test: /\.(jpe?g|png|gif|webp|ico|woff2?|[to]tf)$/i,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: '[name].[contenthash:6].[ext]',
          outputPath: 'assets',
        },
      },
    ],
  },
  plugins: [
    // clean last built files
    new CleanWebpackPlugin(),
    // extract css files from loader
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:6].css',
    }),
    // create html files use `html-loader` and `svg-inline-loader`
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify:
        env === 'production'
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
          : false,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],
  devServer: {
    contentBase: 'dist',
    compress: true,
    port: 9000,
  },
};
