// basic concept of memoization pattern
function Calculate(key, input, func){
    Calculate.data = Calculate.data || {};
    if(!Calculate.data[key]){
        var result;
        result = func(input);
        Calculate.data[key] = result;
    }

    return Calculate.data[key];
}

var result = Calculate(1, 5, function(input){
   return input*input;
});

console.log(result);

result = Calculate(2, 5, function(input){
   return input * input / 4;
});

console.log(result);
console.log(Calculate(1));
console.log(Calculate(2));

// using Function.prototype.method
Function.prototype.memoization = function(key){
    var arg = Array.prototype.slice.call(arguments, 1);
    this.data = this.data || {};    // short circuit

    return this.data[key] !== undefined ? this.data[key] : this.data[key] = this.apply(this, arg);
};

function myCalc(input) {
    return input * input;
}

function myCalc2(input) {
    return input*input/4;
}

console.log(myCalc.memoization(1, 5));
console.log(myCalc2.memoization(1, 6));
console.log(myCalc2.memoization(2, 7));
console.log(myCalc.memoization(2, 4));