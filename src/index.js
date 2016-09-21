/**
 * React create BTM Class
 */

const createBemClass = (...initialClassNames) => {
  const blocks = initialClassNames.filter(cn => typeof cn === 'string');
  const modifiersObj = initialClassNames.filter(obj => typeof obj === 'object').reduce((whole, obj) => obj, {});
  const modifiers = Object.keys(modifiersObj).filter(key => key.length >= 1).filter((key) => !!modifiersObj[key]);

  const initialState = modifiers.reduce((whole, modifier) => {
    return whole.concat(whole.map(block => `${block}--${modifier}`));
  }, blocks);

  const builder = (elementsStr = '', modifiersObj = {}) => {
    const element = elementsStr;
    const modifiers = Object.keys(modifiersObj).filter(key => key.length >= 1).filter((key) => !!modifiersObj[key]);


    const elementAttached = initialState.map(block => {
      if(element) return `${block}__${element}`;
      return block;
    });

    return modifiers.reduce((whole, modifier) => {
      return whole.concat(whole.map(cn => `${cn}--${modifier}`));
    }, elementAttached).join(' ');
  }

  return builder;
};

module.exports = createBemClass;
