const semver = require('semver');
const nodeVersion = require('../../package').engines.node;

if (!semver.satisfies(process.version, nodeVersion)) {
  console.log(`Required node version ${nodeVersion} not satisfied with current version ${process.version}.`);
  process.exit(1);
}
