'use strict';

let a = 'Ahmad';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

let b = 'Hello ' + a + ', your name is ';

if (a.length > 5) {
  b = b + 'long.';
} else if (a.length === 5) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

console.log(b);
