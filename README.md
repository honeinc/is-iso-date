# is-iso-date [![Build Status](https://travis-ci.org/honeinc/is-iso-date.svg?branch=master)](https://travis-ci.org/honeinc/is-iso-date)

is-iso-date is a simple utility to check if a string is an ISO-compliant date.

## Install

    $ npm install is-iso-date

## Usage

```javascript
var isISODate = require( 'is-iso-date' );

console.log( isISODate( '2015-02-21T00:52:43.822Z' ) ); // true
console.log( isISODate( '2015-02-21T00:52:43.822' ) );  // false
console.log( isISODate( '2015-02-21T00:52:43Z' ) );     // true
console.log( isISODate( '2015-02-21T00:52:43' ) );      // false
console.log( isISODate( '2015-02-21T00:52Z' ) );        // true
console.log( isISODate( '2015-02-21T00:52' ) );         // false
console.log( isISODate( '2015-02-21T00Z' ) );           // false
```

## Reference

This is basically just the regexp from this StackOverflow discussion wrapped in a tiny library with some tests: http://stackoverflow.com/questions/3143070/javascript-regex-iso-datetime