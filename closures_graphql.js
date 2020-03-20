//How closures solve the issue of circular reference in GraphQL
function init() {
  obj = {
  displayNameProp: name,
  displayNameFunc: () => {     
                     console.log("using function", name);
                   }
  }
  var name = 'Chrome'
  console.log("using property", obj.displayNameProp) //undefined
  obj.displayNameFunc(); //'Chrome'
}
init();
