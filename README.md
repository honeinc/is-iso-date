# ViewManager [![Build Status](https://travis-ci.org/honeinc/viewmanager.svg?branch=master)](https://travis-ci.org/honeinc/viewmanager)

ViewManager is a small, simple library to maintain a set of views such that only one view is open at a time.

## Install

    $ npm install viewmananger

## Usage

ViewManager is intended to be used with [browserify](http://browserify.org).

```javascript
var ViewManager = require( 'viewmanager' );

var viewmanager = new ViewManager();

viewmanager.add( 'foo', document.getElementById( 'foo' ) );
viewmanager.add( 'bar', document.getElementById( 'bar' ) );
viewmanager.add( 'yak', document.getElementById( 'yak' ) );

// ensures the default show class 'show' is set on 'foo' and unset on the other managed views
viewmanager.open( 'foo' );

// will set the 'show' class on 'bar', and remove it from the other views
viewmanager.open( 'bar' );
```

## Options

### showClass

```javascript
var viewmanager = new ViewManager( {
    showClass: 'blah' // defaults to 'show'
} );
```

When open() is called on a view id, will ensure that the given showClass is added to the opened view and
removed from all other managed views.

### hideClass
```javascript
var viewmanager = new ViewManager( {
    hideClass: 'blarg' // defaults to ''
} );
```

When open() is called on a view id, will ensure that the given hideClass is removed from the opened view and
added to all other managed views.

## Methods

### add( id, el )

```javascript
viewmanager.add( 'foo', document.getElementById( 'foo' ) );
```

Adds the given element to the view manager with the specified id.

### remove( id )

```javascript
viewmanager.remove( 'foo' );
```

Removed the view associated with the id 'foo' from the view mananger.

### open( id )

```javascript
viewmanager.open( 'foo' );
```

Opens the view specified by the id 'foo', esuring it has the proper show and hide classes applied and that
all other managed views are appropriately hidden (again, with proper show/hide classes applied).

## Reference

This is essentially a fork and simplification of [ymir](https://github.com/honeinc/ymir).