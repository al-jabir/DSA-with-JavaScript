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

  // last Item

  isLastItem() {
    let lastItem = this.head;
    // check condition
    if (lastItem) {
      // null loop check
      while (lastItem.next) {
        lastItem = lastItem.next;
      }
    }
    return lastItem;
  }
  // string method
  toString() {
    let node = this.head;
    let str = '';
    // node check conditon
    while (node) {
      // condition check Array

      if (Array.isArray(node.data)) {
        node.data = JSON.stringify(node.data);
      }
      // condition check ,
      if (node.next === null) {
        str += `${node.data} `;
        node = node.next;
      } else {
        str += `${node.data}, `;
        node = node.next;
      }
    }

    return str;
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
myList.append(
  new Node([
    'fuck',
    'sex',
    19,
    9,
    { sex: 'male', ride: 'fucking riders' },
    2003,
  ])
);

console.log(myList);

console.log(myList.isLength());
console.log(myList.isFirstItem());
console.log(myList.isLastItem());
console.log(myList.toString());
