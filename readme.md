# unlazy-loader [![NPM version](https://img.shields.io/npm/v/unlazy-loader.svg)](https://www.npmjs.com/package/unlazy-loader)

> Webpack loader to transform lazy-cache files into unlazy cached files.

## Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm i unlazy-loader --save
```

## Usage

This loader is intended to be used with [webpack][webpack] to transform files using [lazy-cache][lazy-cache] into files that require modules directly.
Use this like any other [webpack loader](http://webpack.github.io/docs/using-loaders.html);

```js
var webpackConfig = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'unlazy'
      }
    ]
  }
}
```

## API

### [.`unlazy-loader`](index.js#L22)

Webpack loader used for transforming files that contain `lazy-cache` into files
that require modules directly.

**Params**

* `source` **{String}**: Source code to inspect.    
* `returns` **{String}**: Transformed source code.  




## Related projects
* [lazy-cache](https://www.npmjs.com/package/lazy-cache): Cache requires to be lazy-loaded when needed. | [homepage](https://github.com/jonschlinkert/lazy-cache)
* [webpack](https://www.npmjs.com/package/webpack): Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which… [more](https://www.npmjs.com/package/webpack) | [homepage](https://github.com/webpack/webpack)

## Running tests
Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/doowb/unlazy-loader/issues/new).

## Author
**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb)

## License
Copyright © 2016 [Brian Woodward](https://github.com/doowb)
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb) on January 14, 2016._

[webpack]: https://github.com/webpack/webpack
[lazy-cache]: https://github.com/jonschlinkert/lazy-cache

