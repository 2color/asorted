# Asorted
Fast sorted array in Javascript. Uses binary search for addition and deletion.

## Installation

**node.js** `Asorted = require('./asorted')`

## Examples

```javascript
var Asorted = require("asorted");
var sorted = new Asorted(4, 42, 8, 16, 15, 23);
console.log(sorted.array);                      // [ 4, 8, 15, 16, 23, 42 ]
sorted.search(16);                              // 3
sorted.search(3);                               // -1
sorted.remove(16);                              // [ 4, 8, 15, 23, 42 ]
sorted.insert(16);                              // [ 4, 8, 15, 16, 23, 42 ]
sorted.insert(50000);                           // [ 4, 8, 15, 16, 23, 42, 50000 ]

var sorted2 = new Asorted({ sortBy: 'size'}, { name: 'Danny', size: 10 }, { name: 'Linux', size: 9 } );
//[ { name: 'Linus', size: 9 }, { name: 'Danny', size: 10 } ]
sorted2.insert({ name: 'Jeremey', size: 20 });
//[ { name: 'Linux', size: 9 },
//  { name: 'Danny', size: 10 },
//  { name: 'Jeremey', size: 20 } ]


```

## Geeky stuff
Since binary search is used for adding and deleting, these operations should be in O(log n).
This however is just for finding the appropriate index. The splice operation is dependent on the browsers implementation.
Modern browsers heavily optimize these operations but the since this uses a dynamic array the worst case could be O(n).

## Roadmap
- Implemenet sorted arrays of objects. When working with flux.js stores, I normally
use native arrays for lists. Coming from backbone.js which has collections which are
basically fancy arrays I need a replacement which can keep an array of objects
sorted based on a given key. So that's the plan. Pull requests are welcome.
- Get this on bower, npm and whatever-package-manger-is-now-cool
