// Excercise: Return 'true' if the width > height

console.log(isLandscape(900, 800));

// Best option: you don't need to explicity say true or false.
function isLandscape(width, height) {
  return (width > height);
}

// Opcao ainda de amador, dizendo true or false claramente
function isLandscape(width, height) {
  return (width > height) ? true : false;
}

// Option de amador
function isLandscape(width, height) {
  if (width > height) return true;
  else return false;
}