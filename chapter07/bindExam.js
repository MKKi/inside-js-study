// bind() exam. It is similar to curry() method.
var print_all = function(arg){
    for(var i in this) console.log(i + " : " + this[i]);
    for(var i in arguments) console.log(i + " : " + arguments[i]);
};

var myObj = { name : "zzone"};

var myFunc = print_all.bind(myObj);
myFunc();

var myFunc2 = print_all.bind(myObj, "1", "2");
myFunc2("3");

var myFunc3 = print_all.bind(myObj, "1", undefined);
myFunc2("3");


// var myFunc4 = print_all(myObj);
// function will be called in global scope, so It print all properties in Object.prototype