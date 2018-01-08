// dynamically add properties to function
function add(x, y){
    return x + y;
};

add.result = add(3, 2);
add.status = 'OK';

console.log(add);

// allocation function values to variables & properties
var foo = function () {
    return 100;
}
console.log(foo());

var obj = {};
obj.bar = function () {
    return 200;
};
console.log(obj.bar());

// allocation a function value to another function parameter
var foo2 = function(func){
    func();
}

foo2(function(){
   console.log('function can be used as the argument :)');
});


// allocation a function value to the return value
var foo3 = function(){
    return function(){
        console.log('this function is the return value.');
    };
};

var bar2 = foo3();
bar2();