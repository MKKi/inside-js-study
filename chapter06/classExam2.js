// using closure
var subClass = function() {
    var F = function() {};

    var subClass = function(obj){
        var parent = this === global ? Function : this;

        var child = function() {
            var _parent = child.parent;

            if(_parent && _parent !== Function){
                _parent.apply(this, arguments);
            }

            if(child.prototype._init){
                child.prototype._init.apply(this, arguments);
            }
        };

        F.prototype = parent.prototype;
        child.prototype = new F();
        child.prototype.constructor = child;
        child.parent = parent;
        child.subClass = arguments.callee;

        for(var i in obj){
            if(obj.hasOwnProperty(i)){
                child.prototype[i] = obj[i];
            }
        }

        return child;
    };

    return subClass;
}();

var person = function (){
    var name = undefined;

    return {
        _init : function(arg) {
            name = arg ? arg : "zzoon";
        },
        getName : function(){
            return name;
        },
        setName : function(arg){
            name = arg;
        }
    };
};

Person = subClass(person());
var iamhjoo = new Person("iamhjoo");
console.log(iamhjoo.getName());

Student = Person.subClass();
var student = new Student("student");
console.log(student.getName());