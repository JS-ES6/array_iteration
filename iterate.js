// JS Nuggets
// Array iteration: 8 methods

// forEach
[1, 2, 3].forEach(function (item, index) {
  console.log(item, index);
});

/*

output
1 0
2 1
3 2

*/

// map
const three = [1, 2, 3];
const doubled = three.map(function (item) {
  return item * 2;
});
console.log(doubled);

/*

output
[2, 4, 6]

*/


// filter
const ints = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = ints.filter(function (item) {
  return item % 2 === 0;
});
console.log(evens);

/*

output
[2, 4, 6, 8]

*/


// reduce
const sum = [1, 2, 3].reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum)

/*
output 6
*/


// some			return true if at least 1 element meet the condition
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
  return item < 0;
});
console.log(hasNegativeNumbers);

/* 
output	 true
*/

// every			return true if every element meet the condition
const allPositiveNumbers = [1, 2, -3].every(function (item) {
  return item > 0;
});
console.log(allPositiveNumbers);

/*
output		false
*/


// find - if finds the item returns whole item
const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const found = objects.find(function (item) {
  return item.id === 'b';
});
console.log(found);

/*
output

		Object{
			id: 'b'
				}

*/


// find index		-  return the index of item if found
const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const foundIndex = objects2.findIndex(function (item) {
  return item.id === 'b';
});
console.log(foundIndex)

// output 1
