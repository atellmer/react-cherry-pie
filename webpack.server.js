'use strict';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const clc = require('cli-color');

const webpackConfig = require('./webpack.dev.config');
const config = require('./config');

const compiler = webpack(webpackConfig);
const port = config.port;

const server = new webpackDevServer(compiler, {
  contentBase: `./${config.root}/public/`,
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

server.listen(config.port, 'localhost', error => {
  if (error) {
    console.error(clc.red(error));
  } else {
    console.log(clc.green('DevServer: ') + clc.yellow(`http://localhost:${port}`));
    console.log(clc.green('-------------------------------------------'));
  }
});
