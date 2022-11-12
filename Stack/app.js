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
    // condition check === 0
    if (len.length === 0) {
      throw new Error('Stack uderflow');
    }
    return this.StackItems.pop();
  }

  // helpers
  lastItem() {
    return this.StackItems[this.StackItems.length - 1];
  }

  // isEmpty

  isEmpty() {
    if (this.StackItems.length === 0) {
      return true;
    }
    return false;
  }
}

let newStack = new Stack();
// check isEmpty

console.log(newStack.isEmpty());

newStack.isPush('fucking');
newStack.isPush('teen fucked');
newStack.isPush(25);
newStack.isPush(19);
newStack.isPush('load fucks');

// check lastItem

console.log(newStack.lastItem());

// isPop

newStack.isPop();
newStack.isPop();

// check isEmpty

console.log(newStack.isEmpty());

// lastItem
newStack.lastItem();
console.log(newStack);
