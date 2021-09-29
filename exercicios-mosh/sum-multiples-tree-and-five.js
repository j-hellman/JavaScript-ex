// Excercise: find the sum of the multiple the 3 and 5

console.log(findSum(10));

function findSum(limit) {
  let sum = 0;
  
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  }
  
  return sum;
}