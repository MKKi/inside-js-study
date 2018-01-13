function wrap(object, method, wrapper){
    var fn = object[method];
    return object[method] = function() {
        console.log(arguments);
        console.log([fn].concat(Array.prototype.slice.call(arguments)));
        console.log(wrapper.apply(this, [fn].concat(Array.prototype.slice.call(arguments))));
        return wrapper.apply(this, [fn].concat(Array.prototype.slice.call(arguments)));
    }
}

Function.prototype.original = function(value) {
    this.value = value;
    console.log("value : " + this.value);
}

var myWrap = wrap(Function.prototype, "original", function(orig_func, value){
    this.value = 20;
    orig_func(value);
    console.log("wraper value : " + this.value);
});

var obj = new myWrap("zzone");