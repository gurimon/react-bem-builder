# react-bem-builder

React and BEM.

## Installation
```sh
$ yarn add react-bem-builder

or

$ npm i react-bem-builder
```

## Usage

```javascript
import bemClassnames from 'react-bem-builder';
```

```javascript
const c = bemClassnames('hoge');
// hoge

cn('item');
// hoge__item

------

const a = bemClassnames('hoge', { me: false });
// hoge

const b = bemClassnames('hoge', [ 'me' ]);
// hoge hoge--me

a('item');
// hoge__item

a('item', { selected: true });
// hoge__item--selected

b('item');
// hoge__item hoge--me__item

b('item', [ 'selected' ]);
// hoge__item hoge__item--selected hoge--me__item hoge--me__item--selected

```

#### Use with React
```javascript
import bemClassnames from 'react-bem-builder';

const cn = bemClassnames('list');

const List = props => {
  return (
    <div className={cn()}>
      <h1 className={cn('title')}>list</h1>
      <ul>
        <li className={cn('item', { selected: true })}>1</li>
        <li className={cn('item', 'hoge', { selected: false })}>2</li>
        <li className={cn('item', 'hoge', [ 'selected' ])}>3</li>
      </ul>
    </div>
  )
};

```

### HTML
```html
<div class="list">
  <h1 class="list__title">list</h1>
  <ul>
    <li class="list__item list__item--selected">1</li>
    <li class="list__item list__hoge">2</li>
    <li class="list__item list__hoge list__item--selected list__hoge--selected">3</li>
  </ul>
</div>
```

## License

MIT
