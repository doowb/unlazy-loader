/*!
 * unlazy-loader <https://github.com/doowb/unlazy-loader>
 *
 * Copyright (c) 2015-present, Brian Woodward.
 * Released under the MIT License.
 */

'use strict';

var regex = require('requires-regex');

/**
 * Webpack loader used for transforming files that contain `lazy-cache` into files
 * that require modules directly.
 *
 * @param  {String} `source` Source code to inspect.
 * @return {String} Transformed source code.
 * @api public
 * @name  `unlazy-loader`
 */

module.exports = function(str) {
  if (this && this.resource && !isLazy(this.resource, str)) {
    return str;
  }
  return transform(str);
};

/**
 * Determine if the source code contains lazy-cache.
 *
 * @param  {String} `fp` File path of the source code to inspect.
 * @param  {String} `source` Source code to inspect.
 * @return {Boolean} `true` if has lazy-cache
 */

function isLazy(fp, source) {
  return fp.indexOf('lazy-cache') === -1;
}

/**
 * Transform source code containing lazy-cache statements into a requirable file usable with webpack.
 *
 * @param  {String} `source` Source code.
 * @return {String} Transformed source code.
 */

function transform(str) {
  str = str.split(/^lazy\(/gm).join('require(');
  var lines = str.split(/\r\n|\n/);
  var len = lines.length;
  var re = regex();
  var idx = 0;

  var start = false;
  var isExported = false;
  var namespace;
  var res = '';

  while (idx < len) {
    var line = lines[idx++];
    res += '\n';

    if (/(?:var fn = require|require = utils)/.test(line)) {
      continue;
    }
    if (/^require = fn/.test(line)) {
      continue;
    }
    // adding this line to catch other variable names than the more specific cases above
    if (/^require = (?:.*)/.test(line)) {
      continue;
    }

    var match = re.exec(line);
    if (!match) {
      res += line;
      continue;
    }

    if (match && (match[2] === 'lazy-cache' || match[3] === 'lazy-cache')) {
      namespace = toNamespace(match[1]);
      if (/module\.exports/.test(match[1])) {
        isExported = true;
      }
      line = 'var ' + namespace + ' = {};';
      start = true;
      res += line;
      continue;
    }

    if (!start) {
      res += line;
      continue;
    }

    var variable = toVariable(match);
    var prefix = toProperty(namespace, variable, match[2]);
    line = line.split(match[0]).join(prefix);
    res += line;
  }

  if (isExported) {
    res += '\nmodule.exports = ' + namespace + ';';
  }
  return res.replace(/^\s+/, '');
}

function toVariable(match) {
  return camelcase(match[3] || match[2]);
}

function toNamespace(str) {
  str = str.replace(/var\s*/, '');
  return str.split(/[^\w]/).shift();
}

function toProperty(namespace, prop, val) {
  return namespace + '.' + prop + ' = ' + toRequire(val);
}

function toRequire(name) {
  return 'require(\'' + name + '\');';
}

/**
 * Used to camelcase the module if a variable is not defined.
 *
 * @param  {String} `str` String containing `_`, `.`, `-` or whitespace that will be camelcased.
 * @return {String} camelcased string.
 */

function camelcase(str) {
  if (!/[\s\W]/.test(str)) return str;
  if (str.length === 1) {
    return str.toLowerCase();
  }
  str = str.replace(/^[\W_]+|[\W_]+$/g, '').toLowerCase();
  return str.replace(/[\W_]+(\w|$)/g, function(_, ch) {
    return ch.toUpperCase();
  });
}

