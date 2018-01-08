foo(); // type error. variable foo is not function
bar();

var foo = function(){
    console.log("foo and x = " + x);
};

function bar(){
    console.log("bar and x = " + x);    // (output) bar and x = undefined. '1' is not assigned to variable x
}

var x=1;