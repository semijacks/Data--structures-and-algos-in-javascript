class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.bottom === null) {
      this.bottom = newNode;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.top.next && !this.bottom.next) {
      return 'Stack is empty';
    }
    this.top = this.top.next;
    this.length--;
    return this.top;
  }
}

let myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
console.log(myStack.push('discord'));
console.log(myStack.peek());
