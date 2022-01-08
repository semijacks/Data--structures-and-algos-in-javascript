// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

const findFirstRecurringCharacter = (arr) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      console.log(`The first recurring character is ${arr[i]}`);
      return arr[i];
    }
    map[arr[i]] = i;
    console.log(map);
  }
};

function findFirstRecurringCharacter2(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      console.log(arr[i]);
      return arr[i];
    }
    map[arr[i]] = i;
  }
  return undefined;
}

findFirstRecurringCharacter2([2, 5, 1, 7, 6, 7]);
