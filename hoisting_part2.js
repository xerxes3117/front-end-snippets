var a = 20;

function myFunc1() {
  console.log(a); //20
}

function myFunc2() {
  console.log(a); //undefined
  var a = 21;
}

myFunc1();
myFunc2();

//Notice the difference in 2 console.logs
//The 1st one is 20 because of lexical scope chain (myFunc1 can gets the scope of global execution context object)
//The 2nd one is undefined because of line "var a = 21". This creates a variable 'a' with undefined value in VO of myFunc2
