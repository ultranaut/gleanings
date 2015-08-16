'use strict';

// http://davidwalsh.name/javascript-debounce-function
(function () {

  var root = this;

  function debounce(fn, delay, immediate) {
    immediate = typeof immediate === 'undefined' ? false : immediate;
    var timeout;
    return function () {
      var context = this;
      var args = Array.prototype.slice.call(arguments);
      var later = function () {
        timeout = null;
        if (!immediate) {
          fn.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, delay);
      if (callNow) {
        fn.apply(context, args);
      }
    };
  }

  // export as a Node module if we're in that environment
  // otherwise set it as a global object (function, whatever)
  if (typeof module !== 'undefined' &&
      typeof module.exports !== 'undefined') {
    module.exports = debounce;
  }
  else {
    root.debounce = debounce;
  }

}).call(this);
