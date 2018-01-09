// module pattern
var Person  = function(arg) {
    var name = arg ? arg : "zzone";

    this.getName = function () {
        return name;
    }

    this.setName = function (value) {
        name = value;
    }
};

var me = new Person();
console.log(me.getName());
me.setName("iamhjoo");
console.log(me.getName());
console.log(me.name);   // (output) undefined

