'use strict';

require('mocha');
require('should');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var unlazy = require('..');

function fixture(fp) {
  return fs.readFileSync(path.join('test/fixtures', fp), 'utf8');
}
function actual(fp) {
  return fs.readFileSync(path.join('test/actual', fp), 'utf8');
}

describe('unlazy', function() {
  it('should unlazy a lazy require', function() {
    assert.equal(unlazy(fixture('bottom.js')), actual('bottom.js'));
    assert.equal(unlazy(fixture('many.js')), actual('many.js'));
    assert.equal(unlazy(fixture('top.js')), actual('top.js'));
    assert.equal(unlazy(fixture('non-lazy.js')), actual('non-lazy.js'));
  });
});
