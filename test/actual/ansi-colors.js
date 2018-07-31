/*!
 * ansi-colors <https://github.com/doowb/ansi-colors>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Module dependencies
 */

var colors = {};

/**
 * Temporarily re-assign `require` to trick browserify and
 * webpack into reconizing lazy dependencies.
 *
 * This tiny bit of ugliness has the huge dual advantage of
 * only loading modules that are actually called at some
 * point in the lifecycle of the application, whilst also
 * allowing browserify and webpack to find modules that
 * are depended on but never actually called.
 */




/**
 * Lazily required module dependencies
 */

/**
 * Wrap a string with ansi codes to create a black background.
 *
 * ```js
 * console.log(colors.bgblack('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  bgblack
 */

colors.bgblack = require('ansi-bgblack');

/**
 * Wrap a string with ansi codes to create a blue background.
 *
 * ```js
 * console.log(colors.bgblue('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  bgblue
 */

colors.bgblue = require('ansi-bgblue');

/**
 * Wrap a string with ansi codes to create a cyan background.
 *
 * ```js
 * console.log(colors.bgcyan('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  bgcyan
 */

colors.bgcyan = require('ansi-bgcyan');

/**
 * Wrap a string with ansi codes to create a green background.
 *
 * ```js
 * console.log(colors.bggreen('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  bggreen
 */

colors.bggreen = require('ansi-bggreen');

/**
 * Wrap a string with ansi codes to create a magenta background.
 *
 * ```js
 * console.log(colors.bgmagenta('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  bgmagenta
 */

colors.bgmagenta = require('ansi-bgmagenta');

/**
 * Wrap a string with ansi codes to create a red background.
 *
 * ```js
 * console.log(colors.bgred('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  bgred
 */

colors.bgred = require('ansi-bgred');

/**
 * Wrap a string with ansi codes to create a white background.
 *
 * ```js
 * console.log(colors.bgwhite('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  bgwhite
 */

colors.bgwhite = require('ansi-bgwhite');

/**
 * Wrap a string with ansi codes to create a yellow background.
 *
 * ```js
 * console.log(colors.bgyellow('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  bgyellow
 */

colors.bgyellow = require('ansi-bgyellow');

/**
 * Wrap a string with ansi codes to create black text.
 *
 * ```js
 * console.log(colors.black('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  black
 */

colors.black = require('ansi-black');

/**
 * Wrap a string with ansi codes to create blue text.
 *
 * ```js
 * console.log(colors.blue('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  blue
 */

colors.blue = require('ansi-blue');

/**
 * Wrap a string with ansi codes to create bold text.
 *
 * ```js
 * console.log(colors.bold('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  bold
 */

colors.bold = require('ansi-bold');

/**
 * Wrap a string with ansi codes to create cyan text.
 *
 * ```js
 * console.log(colors.cyan('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  cyan
 */

colors.cyan = require('ansi-cyan');

/**
 * Wrap a string with ansi codes to create dim text.
 *
 * ```js
 * console.log(colors.dim('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  dim
 */

colors.dim = require('ansi-dim');

/**
 * Wrap a string with ansi codes to create gray text.
 *
 * ```js
 * console.log(colors.gray('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  gray
 */

colors.gray = require('ansi-gray');

/**
 * Wrap a string with ansi codes to create green text.
 *
 * ```js
 * console.log(colors.green('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  green
 */

colors.green = require('ansi-green');

/**
 * Wrap a string with ansi codes to create grey text.
 *
 * ```js
 * console.log(colors.grey('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  grey
 */

colors.grey = require('ansi-grey');

/**
 * Wrap a string with ansi codes to create hidden text.
 *
 * ```js
 * console.log(colors.hidden('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  hidden
 */

colors.hidden = require('ansi-hidden');

/**
 * Wrap a string with ansi codes to create inverse text.
 *
 * ```js
 * console.log(colors.inverse('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  inverse
 */

colors.inverse = require('ansi-inverse');

/**
 * Wrap a string with ansi codes to create italic text.
 *
 * ```js
 * console.log(colors.italic('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  italic
 */

colors.italic = require('ansi-italic');

/**
 * Wrap a string with ansi codes to create magenta text.
 *
 * ```js
 * console.log(colors.magenta('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  magenta
 */

colors.magenta = require('ansi-magenta');

/**
 * Wrap a string with ansi codes to create red text.
 *
 * ```js
 * console.log(colors.red('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  red
 */

colors.red = require('ansi-red');

/**
 * Wrap a string with ansi codes to reset ansi colors currently on the string.
 *
 * ```js
 * console.log(colors.reset('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  reset
 */

colors.reset = require('ansi-reset');

/**
 * Wrap a string with ansi codes to add a strikethrough to the text.
 *
 * ```js
 * console.log(colors.strikethrough('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  strikethrough
 */

colors.strikethrough = require('ansi-strikethrough');

/**
 * Wrap a string with ansi codes to underline the text.
 *
 * ```js
 * console.log(colors.underline('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  underline
 */

colors.underline = require('ansi-underline');

/**
 * Wrap a string with ansi codes to create white text.
 *
 * ```js
 * console.log(colors.white('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  white
 */

colors.white = require('ansi-white');

/**
 * Wrap a string with ansi codes to create yellow text.
 *
 * ```js
 * console.log(colors.yellow('some string'));
 * ```
 *
 * @param  {String} `str` String to wrap with ansi codes.
 * @return {String} Wrapped string
 * @api public
 * @name  yellow
 */

colors.yellow = require('ansi-yellow');

/**
 * Restore `require`
 */



/**
 * Expose `colors` modules
 */

module.exports = colors;
