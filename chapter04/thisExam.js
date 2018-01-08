// method call this binding: this binding to callee
// create myObject
var myObject = {
    name: 'foo',
    sayName: function(){
        console.log(this.name);
    }
};

// create otherObject
var otherObject = {
    name: 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();

// function call this biding: this binding to window object
// var test = 'this is test';
// console.log(window.test);
//
// var sayFoo = function(){
//     console.log(this.test);
// };
//
// sayFoo();

// inner function call this biding: this binding to window object
var value = 100;

var myObject2 = {
    value: 1,
    func1: function(){
        this.value += 1;    // Fix code to 'var that = this;' for solving problem
        console.log('func1() called. this.value : ' + this.value);

        // func2() inner function
        func2 = function(){
            this.value += 1;    // Fix code to 'that.value +=1;' for solving problem
            console.log('func2() called. this.value : ' + this.value);

            // func3() inner function
            func3 = function(){
                this.value += 1;    // Fix code to 'that.value += 1;' for solving problem
                console.log('func3() called. this.value : ' + this.value);
            }

            func3();
        }

        func2();
    }
};

myObject2.func1();