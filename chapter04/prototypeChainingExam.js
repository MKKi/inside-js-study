// example of prototype chaining that use constructor function call
function Person(name, age, hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

var foo = new Person('foo', 30, 'tennis');

console.log(foo.hasOwnProperty('name'));

// add custom function to standard prototype object
String.prototype.testMethod = function() {
    console.log('This is the String.prototype.testMethod()');
};

var str = 'this is test';
str.testMethod();

console.dir(String.prototype);
