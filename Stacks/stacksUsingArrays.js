class Stack {
  constructor() {
    this.arr = [];
  }

  peek() {
    console.log(this);
    return this.arr[this.arr.length - 1];
  }

  push(value) {
    this.arr.push(value);
    return this;
  }

  pop() {
    this.arr.pop();
    return this;
  }
}

let myStack = new Stack();
myStack.push(5);
myStack.push(17);
myStack.push(29);
myStack.push(50);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.peek();
