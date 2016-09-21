'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * React create BTM Class
 */

var createBemClass = function createBemClass() {
  for (var _len = arguments.length, initialClassNames = Array(_len), _key = 0; _key < _len; _key++) {
    initialClassNames[_key] = arguments[_key];
  }

  var blocks = initialClassNames.filter(function (cn) {
    return typeof cn === 'string';
  });
  var modifiersObj = initialClassNames.filter(function (obj) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  }).reduce(function (whole, obj) {
    return obj;
  }, {});
  var modifiers = Object.keys(modifiersObj).filter(function (key) {
    return key.length >= 1;
  }).filter(function (key) {
    return !!modifiersObj[key];
  });

  var initialState = modifiers.reduce(function (whole, modifier) {
    return whole.concat(whole.map(function (block) {
      return block + '--' + modifier;
    }));
  }, blocks);

  var builder = function builder() {
    var elementsStr = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var modifiersObj = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var element = elementsStr;
    var modifiers = Object.keys(modifiersObj).filter(function (key) {
      return key.length >= 1;
    }).filter(function (key) {
      return !!modifiersObj[key];
    });

    var elementAttached = initialState.map(function (block) {
      if (element) return block + '__' + element;
      return block;
    });

    return modifiers.reduce(function (whole, modifier) {
      return whole.concat(whole.map(function (cn) {
        return cn + '--' + modifier;
      }));
    }, elementAttached).join(' ');
  };

  return builder;
};

module.exports = createBemClass;