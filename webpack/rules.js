const path = require('path');

const CONFIG = require('../config');


const rules = [];
const js = CONFIG.ENV !== 'production'
? {
  test: /\.(js|jsx)$/,
  use: [
    { loader: 'react-hot-loader' },
    { loader: 'babel-loader' },
    { loader: 'eslint-loader' }
  ],
  include: path.resolve(__dirname, `../${CONFIG.ROOT_DIR}`)
} : {
  test: /\.(js|jsx)$/,
  use: [
    { loader: 'babel-loader' },
    { loader: 'eslint-loader' }
  ],
  include: path.resolve(__dirname, `../${CONFIG.ROOT_DIR}`)
};
const css = {
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        localIdentName: CONFIG.ENV !== 'production' ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
      }
    },
    { loader: 'postcss-loader' }
  ]
};
const json = {
  test: /\.json$/,
  use: 'json-loader'
};
const files = {
  test: /\.(gif|jpe?g|png|svg|ico)/,
  use: [
    { loader: 'url-loader', options: { limit: 8192 } }
  ]
};
const fonts = {
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  use: [
    { loader: 'file-loader' }
  ]
};

rules.push(js, css, json, files, fonts);


module.exports = rules;
