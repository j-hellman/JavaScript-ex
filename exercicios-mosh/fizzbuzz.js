/* Excercise FizzBuzz:
Divisible by 3 => Fizz
Divisible by 5 => Buzz
Divisible by 3 and 5 => FizzBuzz
Not divisible by 3 or 5 => input
Not a number => 'Not a number' */


// My second solution (after Mosh's) *****************************
const output = fizzBuzz('x');
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return(`'${input}' is not a number.`);
  
  if (input % 15 == 0)
    return('FizzBuzz');
  
  if (input % 3 == 0)
    return('Fizz');
  
  if (input % 5 == 0)
    return('Buzz')
  
  return(input);
}

// My first solution *****************************
// let number = 'x';

// if (number % 15 == 0) {
//   console.log('FizzBuzz');
// } else if (number % 3 == 0) {
//   console.log('Fizz');
// } else if (number % 5 == 0) {
//   console.log('Buzz');
// } else if (typeof(number) !== 'number') {
//   console.log(`'${number}' is not a number.`);
// } else console.log(number);


// Mosh's solution *****************************
// const output = fizzBuzz(1);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== 'number')
//     return('Not a number');

//   if ((input % 3 == 0) && (input % 5 == 0))
//     return('FizzBuzz');
  
//   if (input % 3 == 0)
//     return('Fizz');
  
//   if (input % 5 ==0)
//     return('Buzz');
  
//   return(input);
// }