//Explaining how hoisting works

//calling a function before it is defined
myFunc();

function myFunc() {
  
    var a = 21;
    console.log(a);   //21
  
    //accessing a variable before it is defined
    console.log(b);   //undefined
    var b = 21;      
  
    //accessing a function variable before it is defined (function expression)
    console.log(c);   //undefined
  
    //calling a function before it is defined (function expressions)
    console.log(c()); //error, c is not a function
    var c = function() {
      console.log("Hello from b");
    }
    
    //calling a function before it is defined (function declaration)
    console.log(d());  //Hello from c
    function d() {
      console.log("Hello from c");
    }
}
