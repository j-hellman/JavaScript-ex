const array = [0, null, undefined, "", 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(teste) {
  let count = 0;

  for (let value in teste) 
    if (value) {
      console.log(value)
      count++;
    }
  return `Esse é o valor total da array: ${count}`;
}