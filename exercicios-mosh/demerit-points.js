/* Excercise Demerit Points
Speed Limit = 70
5 -> 1 point
12 points -> suspended
Hint: use the function Math.floor(1.3) */


// Option 1: Mosh's solution
checkSpeed(80);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  
  if (speed < speedLimit + kmPerPoint) {
    console.log('OK');
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points > 12)
  console.log('License suspended');
  else
  console.log('Points', points);
}


// Option 2: without optimization
checkSpeed(72);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint)
    console.log('OK');

  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points > 12)
      console.log('License suspended');
    else
      console.log('Points', points);
  }
}
