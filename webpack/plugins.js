/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONFIG = require('../config');

const postcssPlugins = [
  require('stylelint')(),
  require('postcss-import')({
    addDependencyTo: webpack,
    path: [ path.resolve(__dirname, '../client/src') ]
  }),
  require('postcss-url')(),
  require('postcss-css-reset')(),
  require('postcss-cssnext')({
    browsers: [ '> 1%' ],
    warnForDuplicates: false
  }),
  require('postcss-browser-reporter')(),
  require('postcss-reporter')()
];

CONFIG.ENV === 'production' && postcssPlugins.push(
  require('cssnano')()
);

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(CONFIG.ENV)
  }),
  new webpack.HotModuleReplacementPlugin(),
  new CleanWebpackPlugin(
    [ path.resolve(__dirname, `../${CONFIG.WEBPACK_OUTPUT_DIR}`) ], {
      root: '',
      verbose: true,
      dry: false
    }),
  new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, `../${CONFIG.ROOT_DIR}/public/index.html`),
    template: path.resolve(__dirname, `../${CONFIG.ROOT_DIR}/src/assets/template.html`)
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      eslint: {
        configFile: '.eslintrc.json',
        emitError: false,
        emitWarning: true
      },
      postcss: () => postcssPlugins
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin()
];

CONFIG.ENV === 'production' && plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    comments: false
  })
);


module.exports = plugins;
