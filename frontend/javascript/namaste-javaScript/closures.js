function x() {
  var a = 7;
  function y() {
    console.log(a);
    a++;
  }
  return y;
}
var z = x();
console.log(z);
z();
z();
