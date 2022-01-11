//creates a node called n1
const n1 = {
  data: 500,
};

//creates a node called n2
const n2 = {
  data: 700,
};

//creates a property called next in n1 which points to n2
n1.next = n2;

console.log(n1);
//consoles { data: 500, next: {data: 700} }
