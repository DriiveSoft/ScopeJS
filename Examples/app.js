// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test();

if(true) {
  // Block Scope
  var a = 4; // Global Variable a gets updated here
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}

for(let a = 0; a < 10; a++) { 
  console.log(`Loop: ${a}`); // In a Template String
}

console.log('Global Scope: ', a, b, c); // The Global values: 4 2 3 

/*
            👉SCOPE CHAIN👈
The scope chain is defined lexically, that is, WHERE a variable or function is written.
Not where it's enclosing function is call!

*/