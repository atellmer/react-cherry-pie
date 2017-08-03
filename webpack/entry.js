/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
const path = require('path');

const CONFIG = require('../config');


const entry = [];

CONFIG.ENV !== 'production' && entry.push(
  `webpack-dev-server/client?http://localhost:${CONFIG.PORT}`,
  'webpack/hot/only-dev-server',
  'babel-polyfill'
);
entry.push(path.resolve(__dirname, `../${CONFIG.WEBPACK_ENTRY_DIR}`));


module.exports = entry;
