
// SWITCH and CASE
let usuario = 'advanced';

switch (usuario) {
  case 'guest':
    console.log('Guest User1');
    break;
  
  case 'moderator':
    console.log('Moderator User1');
    break;
  
  case 'advanced':
    console.log('Advanced User1');
    break;
  
  default:
    console.log('Unknown User1');
}


// OPTION 2: using 'if...else'
if (usuario === 'guest') console.log('Guest User');
else if (usuario === 'moderator') console.log('Moderator User');
else if (usuario === 'advanced') console.log('Advanced User');
else console.log('Unknown User');