var foo = {
    name: 'foo',
    major: 'computer science'
};

// read properties
console.log(foo.name);
console.log(foo['name']);   // foo[name] is error

// update properties
foo.major = "data science";
console.log(foo.major);

// create properties dynamically
foo.age = 30;
console.log(foo['age']);

// print properties for-in syntax
var prop;
for(prop in foo){
    console.log(prop, foo[prop]);
}

// delete properties
delete foo.age; // properties only(can't delete object)
for(prop in foo){
    console.log(prop, foo[prop]);
}