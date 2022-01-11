// basic hash table definitions

// objects - only stores keys as strings
let user = {
  age: 30,
  name: 'John Doe',
  hasMagic: true,
  scream: () => {
    console.log('Ahhhhhhh!!!!!');
  },
};

//Maps - allows keys to be of any time
let map = new Map();
map.name = 'MKBHD';

console.log(map);

//Sets - only stores keys and not values
let set = new Set();
set.age = 30;

console.log(set);
