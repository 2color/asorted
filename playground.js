var Asorted = require('./asorted');


var dates = new Asorted({ sortBy: 'date'});
var date, sign;
// add different dates to Asorted
for(i = 1; i <= 10; i++) {
  sign = (i % 2 === 0) ? -1 : 1;
  dates.insert({
    date: new Date(Date.now() + i * sign * 1000 * 60 * 60 * 24)
  });

}

console.log(dates.array);

var sorted = new Asorted(4, 42, 8, 16, 15, 23);
console.log(sorted.array);
console.log(sorted.search(3));
console.log(sorted.search(16));
sorted.remove(16);
console.log(sorted.array);
sorted.insert(50000);
console.log(sorted.array);



