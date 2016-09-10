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
	devtool: null,
	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.html']
	},
	entry: path.resolve(__dirname, config.root + '/app/index'),
	output: {
		path: path.resolve(__dirname, config.root + '/' + config.distDir + '/'),
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
					warnForDuplicates: false,
				}
			),
			require('postcss-mixins')(),
			require('postcss-nested')(),
			require('postcss-simple-vars')(),
			require('postcss-extend')(),
			require('cssnano')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')(),
    ]
  },
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, config.root + '/index.html'),
			template: path.resolve(__dirname, config.root + '/app/assets/template.html'),
			hash: true,
			minify: {
				collapseWhitespace: true,
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.NoErrorsPlugin(),
	],
}
