const path = require('path');

const CONFIG = require('../config');


const output = {
  path: path.resolve(__dirname, `../${CONFIG.WEBPACK_OUTPUT_DIR}`),
  filename: 'bundle.[hash].js',
  publicPath: CONFIG.ENV !== 'production'
  ? `/${CONFIG.WEBPACK_PUBLIC_PATH}/`
  : `${CONFIG.WEBPACK_PUBLIC_PATH}/`
};


module.exports = output;
