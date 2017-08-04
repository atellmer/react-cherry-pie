/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
const path = require('path');

const CONFIG = require('../config');


const entry = {
  vendor: [
    'react',
    'react-dom',
    'react-apollo',
    'subscriptions-transport-ws',
    'redux',
    'react-redux',
    'redux-saga',
    'redux-thunk',
    'react-router-dom',
    'react-router-redux',
    'history',
    'react-tap-event-plugin',
    'material-ui',
    'styled-components',
    'recompose',
    'rxjs',
    'ramda',
    'axios',
    'device-detect.js',
    'formsy-react',
    'react-transition-group',
    'reselect'
  ],
  app: path.resolve(__dirname, `../${CONFIG.WEBPACK_ENTRY_DIR}`)
};

CONFIG.ENV !== 'production' && entry.vendor.unshift(
  `webpack-dev-server/client?http://localhost:${CONFIG.PORT}`,
  'webpack/hot/only-dev-server',
  'babel-polyfill'
);


module.exports = entry;
