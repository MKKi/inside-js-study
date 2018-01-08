// encapsulation of function
var getCompletedStr = (function(){
   var buffArr = ['I am ', '', '. I live in ', '', '. I\'am ', '', ' years old.'];
   return (function(name, city, age){
       buffArr[1] = name;
       buffArr[3] = city;
       buffArr[5] = age;

       return buffArr.join('');
   });
})();

var str = getCompletedStr('zzone', 'seoul', 16);
console.log(typeof str);