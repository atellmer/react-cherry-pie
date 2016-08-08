'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nib = require('nib');
var clc = require('cli-color');

var config = require('./config');

console.log(clc.green('-------------------------------------------'));
console.log(clc.green('Mode: ') + clc.yellow(config.mode));
console.log(clc.green('Debug: ') + clc.yellow(config.debug));
console.log(clc.green('-------------------------------------------'));

module.exports = {
	devtool: null,
	resolve: {
		extensions: ['', '.js', '.jsx', '.styl', '.css', '.html']
	},
	entry: path.join(__dirname, config.root + '/app/index'),
	output: {
		path: path.join(__dirname, config.root + '/' + config.distDir + '/'),
		filename: config.bundle,
		publicPath: config.distDir + '/'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel'],
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
				test: /\.html$/,
				loader: 'html'
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
		compress: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.join(__dirname, config.root + '/index.html'),
			template: path.join(__dirname, config.root + '/app/template/index.html'),
			hash: true
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.NoErrorsPlugin()
	]
}
