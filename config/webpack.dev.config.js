var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');
var config = baseConfig;

config.entry = [
	'react-hot-loader/patch',
	'webpack-dev-server/client?http://localhost:3000',
	'webpack/hot/only-dev-server',
	...baseConfig.entry || []
];

config.module.loaders = baseConfig.module.loaders.map(function(loader) {
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
	...baseConfig.plugins || []
];

module.exports = config;