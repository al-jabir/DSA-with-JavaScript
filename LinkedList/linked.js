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
