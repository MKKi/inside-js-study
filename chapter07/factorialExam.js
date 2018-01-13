// imperative Programming
// roof
function fact(num) {
    var val = 1;
    for(var i=2; i <= num; i++){
        val *= i;
    }

    return val;
}

console.log(fact(10));

// recursion
function factRecur(num){
    if(num < 2) return 1;
    return num*factRecur(num-1);
}
console.log(factRecur(10));

// functional Programming using memoization
var factFunctional = function (){
    var cache = {
        '0' : 1
    };
    var func = function(num){
        var result = cache[num];
        if(typeof(result) === 'number') {
            return result;
        } else {
            result = cache[num] = num * func(num-1);
        }

        return result;
    };

    return func;
}();

console.log(factFunctional(10));