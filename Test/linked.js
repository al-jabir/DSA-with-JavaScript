class Linked {
  constructor(head = null) {
    this.head = head;
  }
  append(newData) {
    let node = this.head;
    if (node === null) {
      this.head = newData;
      return this;
    }
    // loop check
    while (node.next) {
      node = node.next;
    }
    node.next = newData;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let list = new Linked();
let myNode = new Node(22);

console.log(myNode);
list.append(new Node('king'));
list.append(new Node('Mafia'));
list.append(new Node(1998));

console.log(list);