// parent() function define
function parent(){
    var a = 100;
    var b = 200;

    // child() function define
    function child(){
        var b = 300;
        console.log(a);
        console.log(b);
    }
    child();
}

parent();
child();    // compile error: inner function can't be accessible on outer scope