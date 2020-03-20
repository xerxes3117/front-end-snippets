//List of changes that occur when we use strict mode

//1) value of 'this' inside any function is not forced into being boxed (object)
//   It is undefined in case it's uninitialized or called in global scope
function withStrict(){
   'use strict';
    console.log("this: ", this)
}

function withoutStrict(){
    console.log("this: ", this)
}

withStrict() // this equals undefined
withoutStrict() // this equals global window object
