// connect user function to another function
function HelloFunc(func){
    this.greeting = 'hello';
}

// define function to helloFunc.prototype
HelloFunc.prototype.call = function (func) {
        func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function (greeting) {
    console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();


function saySomething(obj, methodName, name){
    return (function(greeting){
        return obj[methodName](greeting, name);
    });
}

function NewObj(obj, name) {
    obj.func = saySomething(this, "who", name);
    return obj;
}

NewObj.prototype.who = function(greeting, name){
    console.log(greeting + " " + (name || "everyone"));
}

var obj1 = new NewObj(objHello, "zzzone");
obj1.call();