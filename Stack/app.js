// Stack

// Array Implemetion of stack

class Stack {
  constructor() {
    this.StackItems = [];
  }

  // isPush

  isPush(item) {
    this.StackItems.push(item);
    return this;
  }

  // isPop

  isPop() {
    let len = this.StackItems;

    return this.StackItems.pop();
  }
}

let newStack = new Stack();

newStack.isPush('fucking');
newStack.isPush('teen fucked');
newStack.isPush(25);
newStack.isPush(19);
newStack.isPush('load fucks');

// isPop
newStack.isPop();
newStack.isPop();
newStack.isPop();
console.log(newStack);
