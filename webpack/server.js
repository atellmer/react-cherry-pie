const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const clc = require('cli-color');

const webpackConfig = require('./common');
const CONFIG = require('../config');


const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, {
  contentBase: `./${CONFIG.ROOT_DIR}/public/`,
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: true,
    chunkModules: false
  }
});

server.listen(CONFIG.PORT, 'localhost', error => {
  if (error) {
    console.error(clc.red(error));
  } else {
    console.log(clc.green('Development server started on: ') + clc.yellow(`http://localhost:${CONFIG.PORT}`));
    console.log(clc.green('-------------------------------------------'));
  }
});
