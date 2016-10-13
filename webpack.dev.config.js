'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
var clc = require('cli-color');

var config = require('./config');

console.log(clc.green('-------------------------------------------'));
console.log(clc.green('Mode: ') + clc.yellow(config.mode));
console.log(clc.green('Debug: ') + clc.yellow(config.debug));
console.log(clc.green('-------------------------------------------'));

module.exports = {
	devtool: 'eval',
	resolve: {
		moduleDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx', '.css', '.html']
	},
	resolveLoader: {
		moduleDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js']
	},
	entry: [
		'webpack-dev-server/client?http://localhost:' + config.port,
		'webpack/hot/only-dev-server',
		'babel-polyfill',
		path.resolve(__dirname, config.root + '/src/index')
	],
	output: {
		path: path.resolve(__dirname, config.root + '/public/' + config.distDir + '/'),
		filename: config.bundle,
		publicPath: '/' + config.distDir + '/'
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			loaders: ['react-hot', 'babel', 'eslint'],
			include: [
				path.resolve(__dirname, config.root),
			]
		}, {
			test: /\.css$/,
			loaders: ['style', 'css?localIdentName=' + config.styles, 'postcss']
		}, {
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.(gif|jpe?g|png|svg|ico)/,
			loader: 'url-loader?limit=8192'
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file'
		}, ]
	},
	eslint: {
		configFile: '.eslintrc'
	},
	postcss: function (webpack) {
		return [
			require('postcss-import')({
				addDependencyTo: webpack
			}),
			require('postcss-url')(),
			require('postcss-css-reset')(),
			require('postcss-cssnext')({
				browsers: ['> 1%'],
				warnForDuplicates: true,
			}),
			require('postcss-mixins')(),
			require('postcss-nested')(),
			require('postcss-simple-vars')(),
			require('postcss-extend')(),
			require('postcss-browser-reporter')(),
			require('postcss-reporter')(),
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, config.root + '/public/index.html'),
			template: path.resolve(__dirname, config.root + '/src/assets/template.html'),
		}),
		new webpack.DefinePlugin({
			environment: JSON.stringify(config.mode)
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new FlowStatusWebpackPlugin({
			failOnError: true
		}),
	],
	watchOptions: {
		aggregateTimeout: 100,
	}
}
