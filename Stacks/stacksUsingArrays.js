class Stack {
  constructor() {
    this.arr = [];
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log(this);
    return this;
  }

  push(value) {
    this.arr.push(value);
    this.top = this.arr[this.arr.length - 1];
    this.bottom = this.arr[0];
    this.length++;
    return this;
  }

  pop() {
    if (this.arr.length === 1) {
      this.arr.pop();
      this.top = null;
      this.bottom = null;
      this.length--;
      return 'Stack is empty';
    }
    this.arr.pop();
    this.top = this.arr[this.arr.length - 1];
    this.length--;
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
