// Exercise: console.log number of stars according to the parameter


// My solution
showStars(5);

function showStars(rows) {
  let stars = '';
  
  for (let i = 0; i < rows; i++) 
  //Ou (let i in rows)
    console.log(stars += '*');
}


// Mosh's solution
showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++)
      pattern += '*';
    console.log(pattern);
  }
}