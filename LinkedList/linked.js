class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  // append data
  append(newNode) {
    let node = this.head;
    if (node === null) {
      this.head = newNode;
      return this;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let myList = new LinkedList();
myList.append(new Node('mafia'));

console.log(myList);
