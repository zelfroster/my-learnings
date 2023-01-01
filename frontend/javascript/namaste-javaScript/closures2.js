function f() {
  let i = 0;
  function fa() {
    console.log(++i);
  }
  return fa;
}

f()()
f()()

let f1 = f()
let f2 = f()

f1()
f1()

f2()

console.dir(f1,f2)
