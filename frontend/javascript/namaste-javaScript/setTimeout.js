function x() {
  // var i = 1;
  // setTimeout(function() {
  //   console.log(i); //This will run after 3 seconds after the function is called
  //   // even if the function execution has finished before this line is run
  // }, 3000)
  // console.log("Namaste JavaScript") //This will run first

  // for (var i = 1; i < 6; i++) {
  //   setTimeout(function() {
  //     console.log(i);
  //   }, i * 1000);
  // }
  // console.log("Namaste JavaScript") //This will run first
  //
  //In the above code we might think that the code will work as it looks,
  //It will print '1' after 1000ms (1second) , '2' after 2000ms, '3' after 3000ms
  //and so on... But It actually doesn't work like that instead it will print 6
  //Because var i is shadowed, all copies of i are pointing to the same variable i
  //so by the time setTimeout is run the value of i has become 6

  //So, we can declare 'i' as 'let' instead of 'var'
  //because let is block scoped and it will not be shadowed
  // for (let i = 1; i < 6; i++) {
  //   setTimeout(function() {
  //     console.log(i);
  //   }, i * 1000);
  // }
  // console.log("Namaste JavaScript") //This will run first

  //But what if we do not have to use let
  //we will pass i to a function and enclose setTimeout inside that function
  //this way new copy of x is created for every iteration
  for (var i = 1; i < 6; i++) {
    function closure(n) {
      setTimeout(function() {
        console.log(n);
      }, i * 1000);
    }
    closure(i);
  }
  console.log("Namaste JavaScript") //This will run first

}
x();
