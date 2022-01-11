class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leaderNode = this.traverseToIndex(index - 1);
    const followingNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.prev = leaderNode;
    newNode.next = followingNode;
    followingNode.prev = newNode;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // check params
    const leaderNode = this.traverseToIndex(index - 1);
    const indexNode = leaderNode.next;
    leaderNode.next = indexNode.next;
    this.length--;
    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new DoublyLinkedList(15);
myLinkedList.append(27);
myLinkedList.append(50);
myLinkedList.prepend(10);
myLinkedList.insert(2, 45);
myLinkedList.insert(1, 88);
// myLinkedList.insert(4, 97);
// myLinkedList.remove(4);
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());
