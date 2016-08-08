'use strict';

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var clc = require('cli-color');

var webpackConfig = require('./webpack.dev.config');
var config = require('./config');

var compiler = webpack(webpackConfig);
var port = config.port;

var server = new webpackDevServer(compiler, {
	contentBase: './' + config.root + '/',
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

server.listen(config.port, 'localhost', function (error, result) {
	if (error) {
		console.error(clc.red(error))
	} else {
		console.log(clc.green('DevServer: ') + clc.yellow('http://localhost:' + port));
		console.log(clc.green('-------------------------------------------'));
	}
});