'use strict';

var uid = 0;
var scopes = {};

module.exports = function (scope) {
    var id;
    if (scope) {
        scopes[scope] = scopes[scope] || 0;
        id = scopes[scope]++;
    }
    else id = uid++;
    return +id;
};

module.exports.string = function (scope) {
    return scope + this(scope);
};
