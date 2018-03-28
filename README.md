# react-redux-typescript-boilerplate
This is skeleton of React application, coded in TypeScript, using Redux to handle application state. It runs on React in version 16 and TypeScript in version 2.7. It consists of two parts and thus may serve two purposes:

1. Application skeleton

    Includes transpilation from TypeScript to ES6 and to ES5, module bundling, live server, hot module replacement enabled, unit tests runners, code linters, bundle analyzer etc. It can be used to quickly setup and start coding new project, simply by cloning and removing `/src` directory and some redundant packages from `package.json`.
    
2. React + Redux + TypeScript code samples

    This is generally content of `/src` directory. There are examples of certain features that I stumbled upon commonly in my experience of web development in TypeScript with React and Redux. They can be used as examples to learn from, or standard pieces of code to duplicate, quickly solving some common problem.  

## Scripts

### start
```
npm start
```
Runs Express server with code in it's current state, bundled by Webpack with configuration for development environment. Result of build process and output from TSLint and StyleLint are displayed in terminal. The application is available at `http://localhost:3000/`. Hot module replacement is enabled, it's output can be found in browser's console.

### build
```
npm run build
npm run build:full
npm run build:full:prod
```
Builds production version of the application. First runs TSLint and StyleLint, which outcome is presented in terminal. Then, if linters are fine, runs tests, which outcome is presented in terminal as well. If tests are fine too, deletes build directories and bundles production version of the application with Webpack. Result of build process is displayed in terminal. Bundled code is available in `/dist` directory.

```
npm run build:full:dev
```
Runs linters and tests, deletes build directories and bundles development version of the application. Result of linters, tests and build process output are displayed in terminal. Bundled code is available in `/dist` directory.

```
npm run build:dev
npm run build:base
```
Bundles development version of the application. Result of build process and output from TSLint and StyleLint are displayed in terminal. Bundled code is available in `/dist` directory.

```
npm run build:prod
```
Bundles production version of the application. Result of build process and output from TSLint and StyleLint are displayed in terminal. Bundled code is available in `/dist` directory.

```
npm run build:clean
```
Deletes directory with bundled code (`/dist`).

### test
```
npm run test
```
Runs all tests and displays report in terminal.

```
npm run test:watch
```
Runs tests watcher. Any change in file with test (inside `__test__` directory and ending with `.test.ts(x)`) will trigger automatic rerun of this test until watcher is killed. After ever rerun, there is report displayed in terminal.

```
npm run test:update
```
Updates snapshots in tests and displays report in terminal.

```
npm run test:coverage
``` 
Generates test coverage. It's result is displayed in terminal. Detailed results are available in `/coverage` directory. File `/coverage/lcov-report/index.html` contains convenient, human readable file with test coverage of each file with code in our `/src` directory. 

```
npm run test:clean
```
Deletes test coverage directory (`/coverage`).

### code check
```
npm run lint
```
Runs TSLint and StyleLint, checking files in `/src` directory. Outcome is displayed in terminal.

```
npm run lint:js
```
Runs ESLint, checking `.js` files in `/scripts` directory. Outcome is displayed in terminal. This is not part of `lint` command, because we don't want checking our build scripts to be a part of our build process.

```
npm run lint:ts
```
Runs TSLint, checking `.ts` and `.tsx` files in `/src` directory. Outcome is displayed in terminal.

```
npm run lint:css
```
Runs StyleLint, checking `.*css` files in `/src` directory. Outcome is displayed in terminal.

```
npm run audit
``` 
Deletes directory with bundled code and bundles new production version of the application. Generates detailed, visual report, displaying content of resulting bundle with an interactive zoomable treemap. Report is available in `/stats` directory. It is generated with webpack-bundle-analyzer plugin.

### misc
```
npm run clean
```
Deletes directories with bundled code and test coverage.

```
npm run check-version
```
Checks if current version of Node satisfies requirement stated in `package.json`, displays message in terminal if not. This command is part of `postinstall` process.

## Changelog:
#### v.1.1.0
Added:
* Webpack Bundle Analyzer
* Axios Mock Adapter
* copying static content as a step in build process

#### v.1.0.0
Added:
* React 16
* Webpack 4
* Routing example
* API call example
* styling example
* Express local server
* build processes for different environemnts
* Webpack compression
* EJS templating
* Jest snapshot testing
* editorconfig

Modified:
* application code structure
* directory structure

Removed:
* Intl
* Reselect
* React-Bootstrap

#### v.0.3.0
Added:
* Awesome TypeScript Loader
* TSLint
* SCSSLint
* basic linting rules

#### v.0.2.0
Added:
* React-Bootstrap
* SCSS processing

#### v.0.1.0
Added:
* React
* Redux
* TypeScript
* Immutable
* Intl
* React-Router
* Reselect
* Jest
* TS-Jest
* ESLint
* Webpack
* Webpack Dev Server
* basic HMR

#### to do
- fix HMR
- fix `hashSetting` variable in webpack config
- add IDE support for absolute imports
- add source maps
