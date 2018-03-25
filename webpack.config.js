const getBundlerConfig = require('./scripts/bundler/getBundlerConfig');

module.exports = () => getBundlerConfig(process.env.environment, process.env.mode, false);

