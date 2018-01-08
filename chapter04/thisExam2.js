// Explicit this binding using apply() method
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var foo = {};

Person.apply(foo, ['foo', 30, 'man']); // Person.call(foo, 'foo', 30, 'man');
console.dir(foo);

// Array.prototype.slice() method call using apply() method
function myFunction() {
    console.dir(arguments);

    var args = Array.prototype.slice.apply(arguments);
    args.shift();
    console.dir(args);
}

myFunction(1, 2, 3);