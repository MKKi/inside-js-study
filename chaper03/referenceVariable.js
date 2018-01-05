var objA = {
    val: 40
};
var objB = objA;
var objC = {
    val: 40
};

console.log(objA.val);
console.log(objB.val);

objB['val'] = 50;

console.log(objA.val);
console.log(objB.val);

console.log(objA == objB);
console.log(objA == objC);