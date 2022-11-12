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
  //length

  isLength() {
    let length = 0;
    let node = this.head; // null
    while (node) {
      length++;
      node = node.next;
    }
    return length;
  }
  // first Item

  isFirstItem() {
    return this.head;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let myList = new LinkedList();
let myNode = new Node('Coder');
console.log(myNode);
myList.append(new Node('mafia'));
myList.append(new Node('will'));
myList.append(new Node('be'));
myList.append(new Node('King'));
myList.append(new Node(1998));
myList.append(new Node(['fuck', 'sex', 19, 9]));

console.log(myList);

console.log(myList.isLength());
console.log(myList.isFirstItem());
