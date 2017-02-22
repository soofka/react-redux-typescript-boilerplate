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
			'.ts',
			'.tsx',
			'.js'
		]
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader',
					'awesome-typescript-loader?configFileName=config/tsconfig.json'
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