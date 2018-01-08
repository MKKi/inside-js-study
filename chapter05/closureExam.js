// basic format of closure
function outerFunc() {
    var x = 10;
    var innerFunc = function () {
        console.log(x); // use local variable of outerFunc() and arguments
    }
    return innerFunc;
}

var inner = outerFunc();
/* end outerFunc life cycle */
inner();