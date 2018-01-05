// create array
var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];
console.log(colorArr[0]);
console.log(colorArr);

// create array element dynamically
var emptyArr = [];  // create empty arr

emptyArr[0] = 100;
emptyArr[3] = 'A';
emptyArr[7] = false;

console.log(emptyArr);
console.log(typeof emptyArr[1]);    // empty array element has undefined data type
console.log(emptyArr.length);

// explicit allocation of array length
var arr = [0, 1, 2];
console.log(arr.length);

arr.length = 5;
console.log(arr);

arr.length = 2;
console.log(arr);
console.log(arr[2]);

// usage push() method & length property
var arrNum = ['zero', 'one', 'two'];

arrNum.push('three');
console.log(arrNum);

arrNum.length = 5;
arrNum.push('four');
console.log(arrNum);