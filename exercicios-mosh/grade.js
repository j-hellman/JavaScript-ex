// Exercise: find the grade

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const ponts = [50, 50, 100];

console.log(calculateMark(ponts));

function calculateMark(pontos) {
  let sum = 0;
  
  for (let ponto of pontos)
    sum += ponto;
  
  let average = (sum / pontos.length); 

  if (average >= 0 && average <= 59) return('Grade ' + 'F');
  if (average >= 60 && average <= 69) return('Grade ' + 'D');
  if (average >= 70 && average <= 79) return('Grade ' + 'C');
  if (average >= 80 && average <= 89) return('Grade ' + 'B');
  if (average >= 90 && average <= 100) return('Grade ' + 'A');
}