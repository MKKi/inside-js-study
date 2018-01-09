// using closure
var Person = function (arg) {
    var name = arg ? arg : "zzone";

    var Func = function() {};
    Func.prototype = {
        getName : function() {
            return name;
        },
        setName : function(value) {
            name = value;
        }
    };

    return Func;
}();

var me = new Person();
console.log(me.name);   // (output) undefined
console.log(me.getName());