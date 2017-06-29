/**
 * React create BTM Class
 */

const createBemBuider = (...initialClassNames) => {
  const bemClass = BemClass.create(...initialClassNames);

  const builder = (...buildeClassNames) => {

    const elements = buildeClassNames.length
      ? buildeClassNames
        .filter(cn => typeof cn === 'string')
      : [""];

    const modifiersObj = buildeClassNames.length
      ? buildeClassNames
        .filter(obj => typeof obj === 'object')
        .reduce((whole, obj) => obj, {})
      : {};

    const classNames = elements.map(element => {
      const modifiers = bemClass.setModifiers(modifiersObj);
      const blockElements = bemClass.addElement(element);
      const blockElementModifiers = bemClass.addModifier(blockElements, modifiers);
      return blockElementModifiers.join(' ');
    });

    return classNames.join(' ');
  }

  return builder;
}

class BemClass {
  constructor(prop) {
    const { blocks, modifiersObj, modifiers } = prop;

    this.blocks = blocks;
    this.modifiers = this.setModifiers(modifiersObj);
    this.initialBlocks = this.addModifier(this.blocks, this.modifiers);
  }

  static create(...initialClassNames) {
    const blocks = initialClassNames
      .filter(cn => typeof cn === 'string');

    const modifiersObj = initialClassNames
      .filter(obj => typeof obj === 'object')
      .reduce((whole, obj) => obj, {});

    return new BemClass({ blocks, modifiersObj });
  }

  setModifiers(modifiersObj = {}) {
    const isArray = this.isArray(modifiersObj);
    const _modifiersObj = isArray ? modifiersObj : Object.keys(modifiersObj);

    return _modifiersObj
      .filter(key => key.length >= 1)
      .filter((key) => !!(isArray || modifiersObj[key]));
  }

  addElement(element) {
    const _blockElements = this.initialBlocks.map(block => {
      if(element) return `${block}__${element}`;
      return block;
    });

    return _blockElements;
  }

  addModifier(blockElements, modifiers) {
    const _blockElementModifiers = modifiers
      .reduce((whole, modifier) => {
        return whole.concat(blockElements.map(cn => `${cn}--${modifier}`));
      }, blockElements);
    return _blockElementModifiers;
  }

  isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }
}

module.exports = createBemBuider;
