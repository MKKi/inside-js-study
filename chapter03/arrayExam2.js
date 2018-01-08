// delete operator is just setting chosen value to undefined
var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);

// splice method is deleting properties of array
arr.splice(2, 2, "spliced", "spliced2");  // splice(start, deleteCount, item...);
console.log(arr);

// create array using Array() constructor
var foo = new Array(3);
console.log(foo);

var bar = new Array('a', 'b', 'c');
console.log(bar);

// array-like objects
var obj = {
    name: 'foo',
    length : 1
};

Array.prototype.push.apply(obj, ['bar']);
Array.prototype.push.apply(obj, ['bar']);
console.log(obj);