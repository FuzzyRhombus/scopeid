'use strict';

var test = require('tape');
var scopeid = require('../');

test('getting an id without scope', function (t) {
    var id = scopeid();
    t.equal(id, 0, 'returns an integer id starting at 0');
    t.end();
});

test('id increments by 1 each call', function (t) {
    var id1 = scopeid(),
        id2 = scopeid();
    t.equal(id2 - id1, 1, 'returns an id 1 higher than the last each call');
    t.end();
});

test('getting an id with scope', function (t) {
    var id1 = scopeid('test'),
        id2 = scopeid('foo'),
        id3 = scopeid('test');
    t.equal(id1, 0, 'returns an integer for the given scope id starting at 0');
    t.equal(id2, 0, 'creates a new scope if it has not been used before');
    t.equal(id3 - id2, 1, 'isolates id counter for each scope');
    t.end();
});

test('getting id as a string', function (t) {
    var id = scopeid.string();
    t.equal(typeof id, 'string', 'can return the id as a string');
    id = scopeid.string('string-');
    t.equal(id, 'string-0', 'returns the given scope as a prefix to the id');
    t.end();
});
