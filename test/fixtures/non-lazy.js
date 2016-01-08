'use strict';

var path = require('path');

/**
 * Module dependencies
 */

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

require('mixin-deep', 'merge');
require('through2', 'through');
require('vinyl', 'File');

utils.foo = function() {

};

module.exports = utils;
