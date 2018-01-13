// Imperative Programming. calc sum of element
function sum(arr) {
    var len = arr.length;
    var i = 0, sum = 0;

    for(; i < len; i++){
        sum += arr[i];
    }

    return sum;
}

var arr = [1,2,3,4];
console.log(sum(arr));

// Imperative Programming. calc multiply of element
function multiply(arr) {
    var len = arr.length;
    var i=0, result = 1;

    for(; i<len; i++){
        result *= arr[i];
    }

    return result;
}

console.log(multiply(arr));

// Functional Programming
function reduce(func, arr, memo){
    var len = arr.length, i = 0, accum = memo;

    for(; i<len; i++){
        accum = func(accum, arr[i]);
    }

    return accum;
}

var funcSum = function (x, y){
    return x+y;
};

var funcMuntiply = function (x, y){
    return x*y;
};

console.log(reduce(funcSum, arr, 0));
console.log(reduce(funcMuntiply, arr, 1));