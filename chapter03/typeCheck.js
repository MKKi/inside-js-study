// number type
var intNum = 10;

// string type
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = "double quote string";
var singleChar = 'a';

// boolean type
var boolVar = true;

// undefined type
var emptyVar;

// null type = object
var nullVar = null;

// (output) number string string string string boolean undefined object
console.log(
    typeof intNum, typeof singleQuoteStr, typeof doubleQuoteStr, typeof singleQuoteStr, typeof singleChar,
    typeof boolVar, typeof emptyVar, typeof nullVar
);

// undefined and null are values
console.log(nullVar === null);
console.log(emptyVar === undefined);