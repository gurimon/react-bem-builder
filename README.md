# react-bem

## Usage

```javascript
// ES2015 imports
import createBemClass from 'react-bem';

// ES5 require
var createBemClass = require('react-bem');
```

#### Use with React
```javascript
import createBemClass from 'react-bem';

const list = React.createClass({
  render() {
    const cn = createBemClass('list');
    return (
      <div className={cn()}>
        <h1 className={cn('title')}>list</h1>
        <ul>
          <li className={cn('item', { selected: true })}>1</li>
          <li className={cn('item', { selected: false })}>2</li>
          <li className={cn('item', { selected: false })}>3</li>
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
    <li class="list__item">2</li>
    <li class="list__item">3</li>
  </ul>
</div>
```
# react-bem
