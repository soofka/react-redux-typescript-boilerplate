const path = require('path');
const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')

const getBundlerConfig = require('../bundler/getBundlerConfig');
const data = require('./mocks/data');

const app = express();
const environment = process.env.environment;
const mode = process.env.mode;
const config = getBundlerConfig(environment, mode, true);

const indexPath = path.join(__dirname, `../../dist${config.output.publicPath}index.html`);

const compiler = webpack(config);
const devMiddleware = new webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  // silent: true,
  // noInfo: true,
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: true,
    assets: false,
    chunks: false,
    modules: false,
    reasons: true,
    children: false,
    source: false,
    errors: true,
    errorDetails: false,
    warnings: true,
    publicPath: false,
  },
});
const hotMiddleware = new webpackHotMiddleware(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);

app.get('/api/get-data', (request, response) => {
  response.json(data);
});

app.use(express.static(indexPath));

app.use((request, response) => {
  devMiddleware.fileSystem.readFile(indexPath, (error, file) => {
    if (error) {
      response.status(404).send(error.toString());
    } else {
      response.status(200).send(file.toString());
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
