class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    console.log(this);
    return this;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }
  }

  dequeue() {
    if (this.length == 0) {
      console.log('Queue is empty');
      return this;
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length--;
      console.log('Queue is empty');
      return this;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

let myQueue = new Queue();
myQueue.enqueue(25);
myQueue.enqueue(60);
myQueue.enqueue(90);
myQueue.enqueue(120);
myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
myQueue.peek();
