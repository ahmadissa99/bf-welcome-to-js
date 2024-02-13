'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y';
let b = 'x';
let t = '';

console.log(a, b, t);

t = a;
a = b;
b = t;

console.log(a, b, t);

// what did you do in this program? I reassigned the variables with new values
// what are the final values of `a` and `b`? 'x' , ''
// how are they changed from the initial values? because we assigned a new value

// is it possible to swap a and b without using t? yes

a = b;
b = a;

console.log(a, b, t);
