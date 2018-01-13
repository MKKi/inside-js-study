// each()
function each(obj, fn, args){
    if(obj.length == undefined) {
        for (var i in obj) {
            fn.apply(obj[i], args || [i, obj[i]]);
        }
    } else {
        for (var i = 0; i < obj.length; i++) {
            fn.apply(obj[i], args || [i, obj[i]]);
        }
    }
    return obj;
}

each([1, 2, 3], function(idx, num){
    console.log(idx + " : " + num);
});

var zzone = {
    name: "zzone",
    age: 30,
    sex: "male"
};

each(zzone, function(idx, num){
    console.log(idx + " : " + num);
});

// map()
Array.prototype.map = function(callback) {
    var obj = this;
    var mapped_value, value;
    var A = new Array(obj.length);

    for(var i=0; i<obj.length; i++) {
        value = obj[i];
        mapped_value = callback.call(null, value);
        A[i] = mapped_value;
    }

    return A;
};

var arr = [1, 2, 3];
var newArr = arr.map(function(value){
   return value*value;
});

console.log(newArr);

// reduce()
Array.prototype.reduce = function(callback, memo){
    var obj = this;
    var value, accumulated_value = memo;

    for(var i=0; i<obj.length; i++){
        value = obj[i];
        accumulated_value = callback.call(null, accumulated_value, value);
    }

    return accumulated_value;
}

var newArr2 = arr.reduce(function(a, b){
    return a + b*b;
}, 0);

console.log(newArr2);