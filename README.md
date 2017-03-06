# ![PVec](http://i.imgur.com/hlCBXkn.png)
[![Build Status](https://travis-ci.org/varbrad/pvec.svg?branch=master)](https://travis-ci.org/varbrad/pvec)
[![Dependencies](https://david-dm.org/varbrad/pvec/status.svg)](https://david-dm.org/varbrad/pvec)
[![Dev Dependencies](https://david-dm.org/varbrad/pvec/dev-status.svg)](https://david-dm.org/varbrad/pvec?type=dev)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/varbrad/pvec/master/LICENSE)

JavaScript port of the Processing PVector class.

* Easy to use.
* No dependencies.
* Built-in [TypeScript](https://github.com/Microsoft/TypeScript) declaration typings.
* CommonJS & ES Module formats supported.

# Usage
First add PVec as a dependency of your project.
````
npm install pvec --save
````

PVec can now be used within your project.

## CommonJS (Node)
````javascript
const PVec = require('pvec')
````

## ES Module (Webpack/Rollup/etc.)
````javascript
import PVec from 'pvec'
````

# Documentation
Functionality is very similar to the PVector class in Processing.

[PVector reference (Processing/Java)](https://processing.org/reference/PVector.html)

__Dedicated documentation for PVec coming soon__

# Build
If for whatever reason you wish to build PVec yourself, to generate the output build files for PVec, simply run;
````
npm run build
````

This will generate the CommonJS and ES Module versions of PVec, and also produce the TypeScript declaration types file.

A testing suite built on [Mocha](https://github.com/mochajs/mocha) can be invoked via;
````
npm test
````
