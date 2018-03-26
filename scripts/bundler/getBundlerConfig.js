const path = require('path');
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const appConfig = require('./appconfig');

const getBundlerConfig = (environment = 'dev', mode = 'normal', localServer = false) => {
  const devEnv = environment === 'dev';
  const audit = mode === 'audit';
  localServer = !!localServer;

  console.log(`Bundling ${environment} package (mode: ${mode}, localServer: ${localServer})`);

  return {
    entry: getEntry(),
    output: getOutput(localServer),
    resolve: getResolve(),
    module: getModule(devEnv),
    plugins: getPlugins(devEnv, audit, localServer),
    mode: getMode(devEnv),
  }

};

const getEntry = () => {
  const main = [
    './src/index.tsx'
  ];

  const vendor =  [
    'axios',
    'babel-polyfill',
    'history',
    'immutable',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'react-router-redux',
    'redux',
    'redux-immutable',
    'redux-saga',
  ];

  return {
    main,
    vendor,
  };
};

const getOutput = (localServer) => {
  const hashSetting = localServer ? 'hash' : 'hash';
  return {
    filename: `assets/js/[name].[${hashSetting}].js`,
    chunkFilename: `assets/js/[name].[${hashSetting}].js`,
    path: path.resolve('dist'),
    publicPath: '/',
  };
};

const getResolve = () => ({
  modules: [
    'src',
    'node_modules'
  ],
  extensions: [
    '.ts',
    '.tsx',
    '.js'
  ]
});

const getModule = (devEnv) => {
  let typeScriptLoaders = [];

  if (!devEnv) {
    typeScriptLoaders.push('babel-loader');
  }

  typeScriptLoaders.push(
    {
      loader: 'awesome-typescript-loader',
      query: {
        configFileName: 'tsconfig.json',
        silent: true
      }
    },
    {
      loader: 'tslint-loader',
      query: {
        configFile: 'tslintconfig.json'
      },
    }
  );

  const styleLoaders = ExtractTextWebpackPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: !devEnv,
        }
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: ['./src']
        }
      }
    ],
  });

  const fontLoaders = [{
    loader: 'file-loader',
    options: {
      name: 'assets/fonts/[name].[ext]?[hash]',
    },
  }];

  const imageLoaders = ['file-loader'];

  if (!devEnv) {
    imageLoaders.push({
      loader: 'image-webpack-loader',
      query: {
        progressive: true,
        optimizationLevel: 7,
        interlaced: false,
        pngquant: {
          quality: '65-90',
          speed: 4,
        },
      },
    });
  }

  return {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: typeScriptLoaders,
      },
      {
        test: /\.scss$/,
        loader: styleLoaders,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: fontLoaders,
      }, {
        test: /\.(gif|png|jpe?g|svg)$/,
        loaders: imageLoaders,
      },
    ],
  };
};

const getPlugins = (devEnv, audit, localServer) => {
  const hashSetting = localServer ? 'hash' : 'hash';
  const envSetting = devEnv ? 'development' : 'production';

  let plugins = [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(devEnv ? 'development' : 'production')
      }
    }),
    new ExtractTextWebpackPlugin({
      filename: `styles/style.[${hashSetting}].css`,
      allChunks: true,
    }),
  ];

  if (!devEnv) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      })
    );
  }

  plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.ejs',
      title: appConfig.title,
      mobile: true,
      unsupportedBrowser: false,
      meta: appConfig.meta,
      favicon: appConfig.favicon,
      manifest: '/manifest.json',
      links: [],
      scripts: [],
      minify: devEnv ? false : {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true
      },
    })
  );

  if (devEnv) {
    plugins.push(
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    );
  }

  if (audit) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: '../stats/report.html'
      })
    );
  }

  return plugins;
};

const getMode = (devEnv) => devEnv ? 'development' : 'production';

module.exports = getBundlerConfig;
