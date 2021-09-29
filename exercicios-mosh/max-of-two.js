
let number = max(6, 3);
console.log(number);

// Option 1
function max(a, b) {
  return (a > b) ? a : b;
}

// Option 2
function max(a, b) {
  if (a > b) return a;
  return b;
}

// Option 3
function max(a, b) {
  if (a > b) return a;
  else return b;
}

// Option 4
let numb1 = 10;
let numb2 = 10;

if (numb1 < numb2) console.log(numb2);
else console.log(numb1);

