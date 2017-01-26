'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clc = require('cli-color');
const config = require('./config');

console.log(clc.green('-------------------------------------------'));
console.log(clc.green('Mode: ') + clc.yellow(config.mode));
console.log(clc.green('Debug: ') + clc.yellow(config.debug));
console.log(clc.green('-------------------------------------------'));

const output = `${config.root}/public/${config.distDir}/`;

const webpackConfig = {
  devtool: false,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css', '.html']
  },
  entry: path.resolve(__dirname, `${config.root}/src/index`),
  output: {
    path: path.resolve(__dirname, output),
    filename: config.bundle,
    publicPath: `${config.distDir}/`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ],
        include: path.resolve(__dirname, config.root)
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { localIdentName: config.styles }
          },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(gif|jpe?g|png|svg|ico)/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(config.mode)
    }),
    new CleanWebpackPlugin(
      [path.resolve(__dirname, output)], {
        root: '',
        verbose: true,
        dry: false
      }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, `${config.root}/public/index.html`),
      template: path.resolve(__dirname, `${config.root}/src/assets/template.html`)
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: '.eslintrc'
        },
        postcss: () => {
          return [
            require('stylelint')(),
            require('postcss-import')(),
            require('postcss-url')(),
            require('postcss-css-reset')(),
            require('postcss-cssnext')({
              browsers: ['> 1%'],
              warnForDuplicates: false,
            }),
            require('cssnano')(),
            require('postcss-browser-reporter')(),
            require('postcss-reporter')()
          ];
        }
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    })
  ],
  watchOptions: {
    aggregateTimeout: 100,
  },
  stats: {
    assets: true,
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: true,
    chunkModules: false
  }
};

module.exports = webpackConfig;
