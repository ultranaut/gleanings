'use strict';

var expect = require('chai').expect;
var debounce = require('../src/debounce');

describe('debounce', function () {
  it('should be a function', function () {
    expect(debounce).to.be.a('function');
  });
  it('should return a function', function () {
    var bar = 'bar';
    expect(debounce(bar)).to.be.a('function');
  });
  it('debounced function should be limited', function () {
    var foo = (function () {
      var counter = 1;
      return function () {
        return counter++;
      };
    })();
    var dbFoo = debounce(foo, 500);

  });
});
