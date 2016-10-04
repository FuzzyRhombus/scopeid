# scopeid

Return simple incremental ids for each named scope

````javascript
var scopeid = require('scopeid');

// no scope (default)
scopeid(); // 0
scopeid(); // 1

scopeid('test'); // 0
scopeid('test'); // 1

// scopes keep id counter separate
scopeid(); // 2
````

You can also return an id as a string instead of an integer:
````javascript
scopeid.string(); // "0"
````

If `.string` is passed a scope the returned id will be prefixed with *scope*
````javascript
scopeid.string('prefix-'); // "prefix-0"
scopeid.string('prefix-'); // "prefix-1"
````

----
### Tests
Run tests using `npm test`
