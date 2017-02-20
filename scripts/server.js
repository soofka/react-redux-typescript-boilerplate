var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var devConfig = require('../config/webpack.dev.config');

new webpackDevServer(webpack(devConfig), {
	publicPath: devConfig.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(3000, 'localhost', function (err) {
	if (err) {
		return console.log(err);
	}
	console.log('Listening at http://localhost:3000/');
});