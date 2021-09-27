
// IF and ELSE

let hour = 20;

if (hour >=5 && hour <12) {
  console.log('Good Morning!');
} else if (hour >=12 && hour <18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Night!');
}


// Como so tem um statement por funcao, pode deixar sem {}

if (hour >=5 && hour <12)
  console.log('Good Morning!');
else if (hour >=12 && hour <18)
  console.log('Good Afternoon!');
else
  console.log('Good Night!');