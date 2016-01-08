'use strict';

/**
 * Module dependencies
 */

var lazy = require('lazy-cache')(require);
lazy('mixin-deep', 'merge');
lazy('through2', 'through');
lazy('vinyl', 'File');

var utils = lazy;

utils.foo = function () {
  
};

module.exports = utils;