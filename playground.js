var Asorted = require('./asorted');


// var dates = [];

// // create an array with different dates
// for(i = 1; i <= 10; i++) {
//   dates.push({
//     date: new Date(Date.now() - i * 1000 * 60 * 60 * 24)
//   });
//   console.log(dates[i-1].date.toString());
// }



// function sortedObjectsArrayIndex(array, key, value) {
//   var low = 0,
//     high = array.length;

//   while (low < high) {
//     var mid = low + high >>> 1;
//     if (array[mid][key] < value) low = mid + 1;
//     else high = mid;
//   }
//   return low;
// }



// console.log(sortedObjectsArrayIndex(dates, 'date', new Date(Date.now() + 10000000) ));


var dates = new Asorted();
var sorted = new Asorted(4, 42, 8, 16, 15, 23)
console.log(sorted.array);
console.log(sorted.search(3));
console.log(sorted.search(16));
sorted.remove(16);
sorted.insert(16);
sorted.insert(50000);
console.log(sorted.array);
console.log(sorted.array);



