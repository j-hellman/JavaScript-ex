// LOOPS using FOR...IN

// Ex 1: using object
const person = {
  name: 'Mosh',
  age: 30
};

for (let key in person) /* key vai rodar para cada objeto */
  console.log(key, person[key]);

// Ex 2: using array
// const colors = ['blue', 'green', 'red'];
// for (let index in colors)
//   console.log(index, colors[index]);


// LOOPS using FOR...OF
// const colors = ['blue', 'green', 'red'];
// for (let color of colors)
//   console.log(color);