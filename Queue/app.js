class Queue {
  constructor() {
    this.queue = [];
  }
  // add data
  add(data) {
    return this.queue.push(data);
  }

  // isShift

  isShift() {
    return this.queue.shift();
  }
}

let newQueue = new Queue();

newQueue.add('kign');
newQueue.add('will be');
newQueue.add('mafia');

newQueue.isShift();

console.log(newQueue);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
}

let newQueues = new QueueLinkedList();

newQueues.enqueue('Nafiul');
console.log(newQueues);
