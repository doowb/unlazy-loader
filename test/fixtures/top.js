'use strict';

/**
 * Module dependencies
 */

var lazy = module.exports = require('lazy-cache')(require);
lazy('mixin-deep', 'merge');
lazy('through2', 'through');
lazy('vinyl', 'File');