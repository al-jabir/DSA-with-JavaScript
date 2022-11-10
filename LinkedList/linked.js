class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  // append data
  append(newNode) {
    let node = this.head;

    // condition check
    if (node === null) {
      // empty data...
      this.head = newNode;
      return this;
    }

    // loop
    while (node.next) {
      node = node.next;
    }

    // new data append
    node.next = newNode;
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
myList.append(new Node('will'));
myList.append(new Node('be'));
myList.append(new Node('King'));
myList.append(new Node(1998));

console.log(myList);
