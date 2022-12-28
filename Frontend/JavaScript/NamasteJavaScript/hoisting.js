

console.log("----------------Values before declaration----------------")
getName()
console.log(x)
console.log(getName)
/*  
If we log the values before declaring the variables then it will print 
'undefined' for variables and will print the entire function for functions 
*/
var x = 7;

function getName() {
    console.log("JavaScript is Weird.")
}

//Arrow function
console.log(getMessage)

//If we print arrow function like this then it won't work
//because arrow function are declared like variables
//so they follow variables principle and initialise undefined

var getMessage = () => {
    console.log("Arrow Funtion")
}

console.log("----------------Values after declaration----------------")
getName()
console.log(x)
console.log(getName)
console.log(getMessage)
