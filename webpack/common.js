const clc = require('cli-color');

const CONFIG = require('../config');
const resolve = require('./resolve');
const entry = require('./entry');
const rules = require('./rules');
const output = require('./output');
const plugins = require('./plugins');


console.log(clc.green('-------------------------------------------'));
console.log(clc.green('ENV: ') + clc.yellow(CONFIG.ENV));
console.log(clc.green('-------------------------------------------'));

const webpackConfig = {
  devtool: CONFIG.ENV !== 'production' ? 'eval' : false,
  resolve,
  entry,
  output,
  module: { rules },
  plugins,
  watchOptions: {
    aggregateTimeout: 100
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
