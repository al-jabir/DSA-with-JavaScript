class Queue {
  constructor() {
    this.queue = [];
  }
  // add data
  add(data) {
    return this.queue.push(data);
  }
}

let newQueue = new Queue();

newQueue.add('kign');
newQueue.add('will be');
newQueue.add('mafia');

console.log(newQueue);
