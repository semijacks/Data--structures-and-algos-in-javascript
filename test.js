function SimpleAdding(num) {
  let sum = 0;

  for (let i = 1; i < num + 1; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(SimpleAdding(5));
