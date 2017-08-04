const path = require('path');

const CONFIG = require('../config');


const output = {
  path: path.resolve(__dirname, `../${CONFIG.WEBPACK_OUTPUT_DIR}`),
  filename: CONFIG.ENV !== 'production'
  ? '[name].bundle.js'
  : '[name].[hash].bundle.js',
  chunkFilename: '[id].[hash].chunk.js',
  publicPath: CONFIG.ENV !== 'production'
  ? `/${CONFIG.WEBPACK_PUBLIC_PATH}/`
  : `${CONFIG.WEBPACK_PUBLIC_PATH}/`
};


module.exports = output;
