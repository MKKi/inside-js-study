// 1. function statement
function add(x, y){
    return x+y;
}

console.log(add(3, 4));

// 2-1. function expression(anonymous function)
var addFunc = function (x, y){
    return x+y;
}

console.log(addFunc(3, 5));

// 2-2. function expression(using named function, enable recursive)
var addFunc2 = function sum(x, y){
    return x+y;
};

var factorialVar = function factorial(n){
    if(n < 2){
        return n;
    }
    return n * factorial(n-1);
};

console.log(addFunc2(5, 7));
// compile error: function in function expression can't be accessed
// console.log(sum(6,10));
console.log(factorialVar(3));

// 3. Function() constructor, rarely use
var addFunc3 = new Function('x', 'y', 'return x+y');
console.log(addFunc3(3, 11));