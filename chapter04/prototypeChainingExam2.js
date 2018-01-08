// prototype object method and this binding
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
};

var foo = new Person('foo');

console.log(foo.getName());

Person.prototype.name = 'person';
console.log(Person.prototype.getName());

// change default prototype object to another
console.log(Person.prototype.constructor);
console.log(foo.country);   //undefined

Person.prototype = {
    country: 'Korea'
};

console.log(Person.prototype.constructor);

var bar = new Person('bar');
console.log(foo.country);   //undefined
console.log(bar.country);
console.log(bar.name);
console.dir(foo);
console.dir(bar);