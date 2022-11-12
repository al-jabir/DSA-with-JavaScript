// Stack

// Array Implemetion of stack

class Stack {
  constructor() {
    this.StackItems = [];
  }

  // isPush

  isPush(item) {
    this.StackItems.push(item);
  }
}

let newStack = new Stack();

newStack.isPush('fucking');
newStack.isPush('teen fucked');
newStack.isPush(25);
newStack.isPush(19);
newStack.isPush('load fucks');

console.log(newStack);
