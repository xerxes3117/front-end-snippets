var age = 11;
console.log(typeof(age)); //number
var name = 11;
console.log(typeof(name)); //string WHY????

//The above happends because in browser there's a name property on window object 
//This property is supposed to be a string(DOMString) so it's type can't be converted to number

//This can be fixed using let instead of var
let name = 11;
console.log(typeof(name)); //number

//let fixes the issue because unlike var, let does not create a property on the global object
//See below code
var foo = "Foo";  // globally scoped
let bar = "Bar"; // globally scoped
console.log(window.foo); // Foo
console.log(window.bar); // undefined

//Further explanation:
//https://stackoverflow.com/questions/10523701/using-the-variable-name-doesnt-work-with-a-js-object/21396286#21396286
