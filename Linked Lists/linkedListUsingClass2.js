class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length + 1;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length = this.length + 1;
  }
}

const myLinkedList = new LinkedList(15);
myLinkedList.append(27);
myLinkedList.append(50);
myLinkedList.prepend(10);
console.log(myLinkedList);
