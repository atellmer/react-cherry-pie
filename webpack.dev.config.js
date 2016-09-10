'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var clc = require('cli-color');

var config = require('./config');

console.log(clc.green('-------------------------------------------'));
console.log(clc.green('Mode: ') + clc.yellow(config.mode));
console.log(clc.green('Debug: ') + clc.yellow(config.debug));
console.log(clc.green('-------------------------------------------'));

module.exports = {
	devtool: 'eval',
	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.html']
	},
	entry: [
		'webpack-dev-server/client?http://localhost:' + config.port,
		'webpack/hot/only-dev-server',
		'babel-polyfill',
		path.resolve(__dirname, config.root + '/app/index')
	],
	output: {
		path: path.resolve(__dirname, config.root + '/' + config.distDir + '/'),
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
				loader: 'style!css?localIdentName=' + config.styles + '!postcss'
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.(gif|jpe?g|png|svg|ico)/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file'
			},
		]
	},
	postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
			require('postcss-css-reset')(),
      require('postcss-cssnext')(
				{
					browsers: ['> 1%'],
					warnForDuplicates: true,
				}
			),
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
			filename: path.resolve(__dirname, config.root + '/index.html'),
			template: path.resolve(__dirname, config.root + '/app/assets/template.html'),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
	],
}
