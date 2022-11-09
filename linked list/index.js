class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(newNode) {
    let node = this.head;
    if (node === null) {
      //empty linked list
      this.head = newNode;
      return this;
    }

    while (node.next) {
      node = node.next;
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
//9, 19, 27
let newLinkedList = new LinkedList();
let newNode1 = new Node(9);
console.log(newLinkedList.append(newNode1));
console.log(newLinkedList.append(new Node(18)));
console.log(newLinkedList.append(new Node(27)));
console.log(newLinkedList.append(new Node('Code')));
console.log(newLinkedList.append(new Node('Frontend')));
console.log(newLinkedList.append(new Node('Junior Software devleoper')));
