// implement fibo function using memoization
var fibo = function() {
    var cache = {
        '0': 0,
        '1': 1
    };
    var func = function(num) {
        if(typeof(cache[num]) === 'number') {
            result = cache[num];
        } else {
            result = cache[num] = num + func(num-1);
        }

        return result;
    }

    return func;
}();

console.log(fibo(10));

// functional programming
var cacher = function(cache, func){
    var calculate = function(num) {
        if(typeof(cache[num]) === 'number'){
            result = cache[num];
        } else {
            result = func(calculate, num);
        }

        return result;
    };

    return calculate;
};

var factFunc = cacher({'0': 1}, function(func, input){
    return input * func(input-1);
});

var fiboFunc = cacher({'0' : 0, '1' : 1}, function(func, input){
   return func(input-1) + func(input-2);
});

console.log(factFunc(10));
console.log(fiboFunc(10));