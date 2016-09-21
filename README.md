# react-bem

## Usage

```javascript
// ES2015 imports
import createBemClass from 'react-bem';

// ES5 require
var createBemClass = require('react-bem');
```

```javascript
// hoge
const cn = createBemClass('hoge');

// hoge__item
cn('item');

------

// hoge
const a = createBemClass('hoge', { me: false });

// hoge hoge--me
const b = createBemClass('hoge', { me: true });

// hoge__item
a('item');

// hoge__item--selected
a('item', { selected: true });

// hoge__item hoge--me__item
b('item');

// hoge__item hoge__item--selected hoge--me__item hoge--me__item--selected
b('item', { selected: true });

```

#### Use with React
```javascript
import createBemClass from 'react-bem';

const List = React.createClass({
  render() {
    const cn = createBemClass('list');
    return (
      <div className={cn()}>
        <h1 className={cn('title')}>list</h1>
        <ul>
          <li className={cn('item', { selected: true })}>1</li>
          <li className={cn('item', 'hoge' { selected: false })}>2</li>
          <li className={cn('item', 'hoge' { selected: true })}>3</li>
        </ul>
      </div>
    )
  }
});
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
