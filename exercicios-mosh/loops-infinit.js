
// Examples of infinit loops
// PS: do not run it, you're gonna crash the browser or your computer 

// Ex 1: forget to increment 'i'
for (let i = 0; i <5; /* i++ */) {
  console.log('Hello World');
}

// Ex 2: forget to increment 'i'
let i = 0;
while (i < 5) {
  console.log('Hello World');
  // i++ 
}

// Ex 2: the 'true' value will never change to 'false'
while (true) {
  console.log('Hello World');
}

// Ex 3: forget to increment 'x'
let x = 0;
do {
  console.log('Hello World');
  // x++
} while (x < 5);