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
