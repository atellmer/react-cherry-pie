'use strict';

var config = {
	port: 3000,
	root: 'client',
	mode: process.env.NODE_ENV,
	debug: process.env.NODE_ENV !== 'production',
	styles: process.env.NODE_ENV !== 'production' ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]',
	distDir: 'dist',
	bundle: 'bundle.js'
}

module.exports = config;