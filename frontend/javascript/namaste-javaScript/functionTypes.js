//Function Statement is also Function Declaration
function a() {
  console.log("a called")
}
a()


//Function Expression
var b = function () {
  console.log("b called")
}
b()


//Anonymous Function
//Anonymous functions are used in a place where functions are used as values.
// function () {
//   //We can not create anonymous functions like this
//   console.log("It will throw an error asking for a function name")
// }


//Named Function Expression
//A named function expression is formed when a function having a name is assigned
//to a variable, in this case this function can only be called like this 'c()'
//However if we try to use the function name inside the function then it's possible
var c = function xyz() {
  console.log(xyz);
}
c()
// xyz(); //throws an error


//Difference between Parameters and Arguments
//Parameters - The values which are declared in a function to get the value when being called are called Arguments
//Arguments - The values which are passed to a function while calling it are called Arguments
//Here, in function param1 and param2 are parameters which will get the value, when the function is called
var d = function (param1, param2) {
  console.log(param1+param2);
}
d(1, 2); // 1 and 2 are the arguments passed which will replace the values of param1 and param2


//First Class Function (First Class Citizen)
//The ability to assign function as values to a variable, pass function as an argument to another function, return
//a function as a value from inside a function is called First Class Functions.
var e = function() {
  console.log("Anonymous function assigned to e variable")
  console.log(e); //we can access the function from inside itself
  // e() //calling this will initiate an infinite recursion
}
e()
var f = function(param) {
  // return function param() {
  //
  // }
  return param;
}
console.log(f(function hello(){
  console.log("hello")
}))

//Arrow Functions
