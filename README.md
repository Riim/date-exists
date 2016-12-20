# date-exists

Check if a date exists.

## Install

```
npm install date-exists --save
```

## Usage

```js
import dateExists from 'date-exists';
// or `var dateExists = require('date-exists').default;`

dateExists('01/01/1970');
// => true

dateExists('1/1/80'); // 01/01/1980
// => true

dateExists('0/1/1900');
// => false

dateExists('29/02/1900'); // 1900 - not a leap year
// => false

dateExists('29/02/1904'); // 1904 - leap year
// => true
```
