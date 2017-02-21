

module.exports = {
	// ...
	module: {
		loaders: [
			// ...

		]
	},

}

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
	entry: [
		'./app/app.tsx'
	],
	output: {
		filename: 'app.js',
		publicPath: '/build',
		path: path.resolve('build')
	},
	resolve: {
		modules: [
			'app',
			'node_modules'
		],
		extensions: [
			'.js',
			'.jsx',
			'.ts',
			'.tsx'
		]
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader',
					'ts-loader'
				]
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader!sass-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true
		})
	]
};