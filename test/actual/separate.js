'use strict';

/**
 * Module dependencies
 */

var lazy = {};
lazy.merge = require('mixin-deep');
lazy.through = require('through2');
lazy.File = require('vinyl');

var utils = lazy;

utils.foo = function () {

};

module.exports = utils;
