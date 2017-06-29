'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * React create BTM Class
 */

var createBemBuider = function createBemBuider() {
  var bemClass = BemClass.create.apply(BemClass, arguments);

  var builder = function builder() {
    for (var _len = arguments.length, buildeClassNames = Array(_len), _key = 0; _key < _len; _key++) {
      buildeClassNames[_key] = arguments[_key];
    }

    var elements = buildeClassNames.length ? buildeClassNames.filter(function (cn) {
      return typeof cn === 'string';
    }) : [""];

    var modifiersObj = buildeClassNames.length ? buildeClassNames.filter(function (obj) {
      return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
    }).reduce(function (whole, obj) {
      return obj;
    }, {}) : {};

    var classNames = elements.map(function (element) {
      var modifiers = bemClass.setModifiers(modifiersObj);
      var blockElements = bemClass.addElement(element);
      var blockElementModifiers = bemClass.addModifier(blockElements, modifiers);
      return blockElementModifiers.join(' ');
    });

    return classNames.join(' ');
  };

  return builder;
};

var BemClass = function () {
  function BemClass(prop) {
    _classCallCheck(this, BemClass);

    var blocks = prop.blocks;
    var modifiersObj = prop.modifiersObj;
    var modifiers = prop.modifiers;


    this.blocks = blocks;
    this.modifiers = this.setModifiers(modifiersObj);
    this.initialBlocks = this.addModifier(this.blocks, this.modifiers);
  }

  _createClass(BemClass, [{
    key: 'setModifiers',
    value: function setModifiers() {
      var modifiersObj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var isArray = this.isArray(modifiersObj);
      var _modifiersObj = isArray ? modifiersObj : Object.keys(modifiersObj);

      return _modifiersObj.filter(function (key) {
        return key.length >= 1;
      }).filter(function (key) {
        return !!(isArray || modifiersObj[key]);
      });
    }
  }, {
    key: 'addElement',
    value: function addElement(element) {
      var _blockElements = this.initialBlocks.map(function (block) {
        if (element) return block + '__' + element;
        return block;
      });

      return _blockElements;
    }
  }, {
    key: 'addModifier',
    value: function addModifier(blockElements, modifiers) {
      var _blockElementModifiers = modifiers.reduce(function (whole, modifier) {
        return whole.concat(blockElements.map(function (cn) {
          return cn + '--' + modifier;
        }));
      }, blockElements);
      return _blockElementModifiers;
    }
  }, {
    key: 'isArray',
    value: function isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    }
  }], [{
    key: 'create',
    value: function create() {
      for (var _len2 = arguments.length, initialClassNames = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        initialClassNames[_key2] = arguments[_key2];
      }

      var blocks = initialClassNames.filter(function (cn) {
        return typeof cn === 'string';
      });

      var modifiersObj = initialClassNames.filter(function (obj) {
        return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
      }).reduce(function (whole, obj) {
        return obj;
      }, {});

      return new BemClass({ blocks: blocks, modifiersObj: modifiersObj });
    }
  }]);

  return BemClass;
}();

module.exports = createBemBuider;