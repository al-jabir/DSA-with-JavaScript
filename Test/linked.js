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
  isLength() {
    let node = this.head;
    let len = 0;
    // loop check
    while (node) {
      len++;
      node = node.next;
    }
    return len;
  }
  toString() {
    let node = this.head;
    let str = '';
    while (node) {
      if (Array.isArray(node.data)) {
        node.data = JSON.stringify(node.data);
      }
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
  isArray() {
    let node = this.head;
    let nodes = [];
    while (node) {
      nodes.push(node.data);
      node = node.next;
    }
    return nodes;
  }

  empty() {
    this.head = null;
    return this;
  }
  isEmpty() {
    let node = this.head;
    if (node === null) {
      return true;
    }
    return false;
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
list.append(new Node(['fuck', 'fucked', { name: 'Emma', age: 22 }, 2003]));

console.log(list);
console.log(list.isLength());
console.log(list.toString());
console.log(list.isArray());
console.log(list.empty());
console.log(list.isEmpty());
