'use strict';

var test = require( 'tape' );
var isISODate = require( '..' );

test( 'testing isISODate', function( t ) {
    t.equals( typeof isISODate, 'function', 'isISODate is exported as a function' );
    t.equals( isISODate( '2015-02-21T00:52:43.822Z' ), true, 'true: YYYY-MM-DDTHH:MM:SS.mmmZ' );
    t.equals( isISODate( '2015-02-21T00:52:43.822' ), false, 'false (no timezone): YYYY-MM-DDTHH:MM:SS.mmm' );
    t.equals( isISODate( '2015-02-21T00:52:43Z' ), true, 'true: YYYY-MM-DDTHH:MM:SSZ' );
    t.equals( isISODate( '2015-02-21T00:52:43' ), false, 'false (no timezone): YYYY-MM-DDTHH:MM:SS' );
    t.equals( isISODate( '2015-02-21T00:52Z' ), true, 'true: YYYY-MM-DDTHH:MMZ' );
    t.equals( isISODate( '2015-02-21T00:52' ), false, 'false (no timezone): YYYY-MM-DDTHH:MM' );
    t.equals( isISODate( '2015-02-21T00Z' ), false, 'false (no minutes): YYYY-MM-DDTHHZ' );
    t.end();
} );
