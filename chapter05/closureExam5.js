// precaution when using closure
// 1. closure properties are variable
function outerFunc(argNum){
    var num = argNum;
    return function(x){
        num += x;
        console.log('num: ' + num);
    }
}

var exam = outerFunc(40);
exam(5);    // num: 45
exam(10);   // num: 55. num is not '50'

// 2. more than one function object's scope chain contain one closure
function func(){
    var x = 1;
    return {
        func1: function(){
            console.log(++x);
        },
        func2: function() {
            console.log(x);
        }
    };
}

var exam2 = func();
exam2.func1();  // 2
exam2.func2();  // 2. x is not '1'

// 3. case that using closure in roof
/*
function countSeconds(howMany){
    for(var i=1; i <= howMany; i++){
        // setTimeout is executed after countSeconds() ends
        setTimeout(function(){
            console.log(currentI);
        }, i*1000);
    }
}

countSeconds(3);    // (output) 4 4 4
*/

function countSeconds(howMany){
    for(var i=1; i <= howMany; i++){
        (function(currentI){
            setTimeout(function(){
                console.log(currentI);
            }, i*1000);
        })(i);
    }
}

countSeconds(3)