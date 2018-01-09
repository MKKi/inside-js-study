var Person  = function(arg) {
    var name = arg ? arg : "zzone";

    return {
        getName : function(){
            return name;
        },
        setName : function(value){
            name = value;
        }
    };
};

var me = Person();  // var me = new Person();
console.log(me.getName());

// return object that use shallow copy
var ArrCreate = function(arg) {
    var arr = [1, 2, 3 ];

    return {
        getArr : function() {
            return arr; // shallow copy
            // return Array.prototype.slice.call(arr);  // deep copy
        }
    };
};

var obj = ArrCreate();  // var obj = new ArrCreate();
var arr = obj.getArr();
arr.push(5);
console.log(obj.getArr());
console.log(arr);   // (output) [1, 2, 3, 5]