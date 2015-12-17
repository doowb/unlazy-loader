/*!
 * unlazy-loader <https://github.com/doowb/unlazy-loader>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var match = require('match-requires');

/**
 * Webpack loader used for transforming files that contain `lazy-cache` into files
 * that require modules directly.
 *
 * @param  {String} `source` Source code to inspect.
 * @return {String} Transformed source code.
 * @api public
 * @name  `unlazy-loader`
 */

module.exports = function(source) {
  if (!isLazy(this.resource, source)) {
    return source;
  }
  return transform(source);
};

/**
 * Regex to determine if a file is using the `lazy-cache` module.
 */

var re = /require\(['"]lazy-cache['"]\)/;

/**
 * Determine if the source code contains lazy-cache.
 *
 * @param  {String} `fp` File path of the source code to inspect.
 * @param  {String} `source` Source code to inspect.
 * @return {Boolean} `true` if has lazy-cache
 */

function isLazy(fp, source) {
  return (re.test(source) && fp.indexOf('lazy-cache') === -1);
}

/**
 * Transform source code containing lazy-cache statements into a requirable file usable with webpack.
 *
 * @param  {String} `source` Source code.
 * @return {String} Transformed source code.
 */

function transform(source) {
  var results = findRequires(source);
  var first = results.filter(function(ele) {
    return ele.module === 'lazy-cache';
  })[0];

  if(!first) return source;

  source = source.split(first.original).join("var " + first.variable + " = {};");
  source = source.split("var fn = require;").join('');
  source = source.split("require = " + first.variable + ";").join('');
  source = source.split("require = fn;").join('');

  results.forEach(function(ele) {
    if (ele.module === 'lazy-cache') return;
    source = source
      .split(ele.original)
      .join(first.variable + "." + (ele.variable ? ele.variable : camelcase(ele.module)) + " = require('" + ele.module + "');");
  });

  return source;
}

/**
 * Find any require statements in the source file and return
 * an array of objects containing information about the line of code.
 *
 * @param  {String} `str` Source code to inspect.
 * @return {Array} Array of matching require statements.
 */

function findRequires(str) {
  var results = match(str);
  return results.map(function(ele) {
    if (ele.module.indexOf(',') === -1) return ele;
    var parts = ele.module.split(/['"],\s*['"]/);
    ele.module = parts[0].trim();
    ele.variable = parts[1].trim();
    return ele;
  });
}

/**
 * Used to camelcase the module if a variable is not defined.
 *
 * @param  {String} `str` String containing `_`, `.`, `-` or whitespace that will be camelcased.
 * @return {String} camelcased string.
 */

function camelcase(str) {
  if (str.length === 1) {
    return str.toLowerCase();
  }
  str = str.replace(/^[\W_]+|[\W_]+$/g, '').toLowerCase();
  return str.replace(/[\W_]+(\w|$)/g, function(_, ch) {
    return ch.toUpperCase();
  });
}

