//It's always pass by value, but for objects the value of the variable is a reference. 
//Because of this, when you pass an object and change its members, those changes persist outside of the function. 
//This makes it look like pass by reference. 
//But if you actually change the value of the object variable you will see that the change does not persist, proving it's really pass by value.

//Also in the function scope new copy variables are created using original passed argument

function changeValues(num, arr1, arr2, obj1, obj2){
  let arrTemp = [1,2,3,4,5,6]
  
  num = num * 10;             // no change
  
  arr1.push(...[4,5,6])       //will cause change in outer variable. internals accessed using address.
  arr2 = arrTemp              //no change in outer variable. just changes the local arr2 variable
  
  obj1.item = "changed";      //will cause change in outer variable. internals accessed using address.
  obj2 = {item: "changed"};   //no change. just changes the local obj2 variable
  
 }
 
var num = 10;

var arr1 = [1,2,3]
var arr2 = [1,2,3]

var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};


changeValues(10, arr1, arr2, obj1, obj2)
