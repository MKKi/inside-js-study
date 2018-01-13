// currying argument that sequential index in array
function calculate(a, b, c) {
    return a*b+c;
}

function curry(func) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
        return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
    };
}

var new_func1 = curry(calculate, 1);
console.log(new_func1(2, 3));   // 1*2+3 = 5
var new_func2 = curry(calculate, 1, 3);
console.log(new_func2(3));  // 1*3+3 = 6

// currying argument that non-sequential index in array
function curry2(func) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
      var arg_idx = 0;
      for(var i = 0; i < arguments.length && arg_idx < arguments.length; i++){
          if(args[i] === undefined){
              args[i] = arguments[arg_idx++];
          }

          return func.apply(null, args);
      }
    };
}

var new_func3 = curry2(calculate, 1, undefined, 3);
console.log(new_func3(2));  // 1*2+3 = 5