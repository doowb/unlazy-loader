'use strict';

/**
 * Module dependencies
 */

var utils = {};



/**
 * Lazily required module dependencies
 */

utils.minimist = require('minimist');
utils.Remarkable = require('remarkable');
utils.repeat = require('repeat-string');
utils.mdlink = require('markdown-link');
utils.concat = require('concat-stream');
utils.matter = require('gray-matter');
utils.pick = require('object.pick');
utils.merge = require('mixin-deep');
utils.li = require('list-item');


/**
 * Expose `utils` modules
 */

module.exports = utils;
