var webpack = require('webpack');
var config = require('./webpack.base.config');

config.entry = [
	'react-hot-loader/patch',
	'webpack-dev-server/client?http://localhost:3000',
	'webpack/hot/only-dev-server',
	...config.entry || []
];

config.module.loaders = config.module.loaders.map(function(loader) {
	if (loader.test === /\.tsx?$/) {
		loader.loaders = [
			'react-hot-loader/webpack',
			...loader.loaders
		];
	}
	return loader;
});

config.plugins = [
	new webpack.HotModuleReplacementPlugin(),
	...config.plugins || []
];

module.exports = config;