class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(newNode) {
    let node = this.head;
    if (node === null) {
      //empty linked list
      this.head = newNode; // {data:9, next: null}
      return this;
    }

    while (node.next) {
      node = node.next;
    }

    node.next = newNode;
    return this;
  }
  // size / length of linked list
  length() {
    let length = 0;
    let node = this.head; // null
    while (node) {
      length++;
      node = node.next;
    }
    return length;
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
newLinkedList.append(newNode1);
newLinkedList.append(new Node(18));
newLinkedList.append(new Node(27));
newLinkedList.append(new Node('Code'));
newLinkedList.append(new Node('Frontend'));
newLinkedList.append(new Node('Junior Software devleoper'));

console.log(newLinkedList);
console.log(newLinkedList.length());
