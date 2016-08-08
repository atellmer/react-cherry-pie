'use strict';

var path = require('path');
var webpack = require('webpack');
var nib = require('nib');
var clc = require('cli-color');

var config = require('./config');

console.log(clc.green('-------------------------------------------'));
console.log(clc.green('Mode: ') + clc.yellow(config.mode));
console.log(clc.green('Debug: ') + clc.yellow(config.debug));
console.log(clc.green('-------------------------------------------'));

module.exports = {
	devtool: 'eval',
	resolve: {
		extensions: ['', '.js', '.jsx', '.styl', '.css', '.html']
	},
	entry: [
		'webpack-dev-server/client?http://localhost:' + config.port,
		'webpack/hot/only-dev-server',
		'babel-polyfill',
		path.join(__dirname, config.root + '/app/index')
	],
	output: {
		path: path.join(__dirname, config.root + '/' + config.distDir + '/'),
		filename: config.bundle,
		publicPath: '/' + config.distDir + '/'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['react-hot', 'babel'],
				include: [
					path.resolve(__dirname, config.root),
				]
			},
			{
				test: /\.css$/,
				loader: 'style!css?localIdentName=' + config.styles
			},
			{
				test: /\.styl$/,
				loader: 'style!css?localIdentName=' + config.styles + '!stylus?paths=node_modules/bootstrap-stylus/stylus/'
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.(gif|jpe?g|png|svg|ico)/,
				loader: 'url-loader?limit=10000'
			},
			{
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file'
			},
		]
	},
	stylus: {
		use: [nib()],
		import: ['~nib/lib/nib/index.styl'],
		compress: false
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}
