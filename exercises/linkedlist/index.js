// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

/*linked list has an order. there are 2 special nodes, head node and tail node.
tail node is identified as not having reference to ny other node
each node has a data bucket attached to it, it can be number, string, array, obj, etc
the other part is a reference to the next node in the chain*/
class Node {
  constructor(data, next = null) {
    //connecting the nodes, if there is no  next node after, set to null not undefined
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  //linkedlist only knows about the head node, then crawls through the rest of the list
  constructor() {
    //no head node should be associated with constructor parameter
    this.head = null;
  }

  insertFirst(data) {
    //takes data and puts it in the head, it there is something there, it goes in front and connects to that node

    this.head = new Node(data, this.head); //this.head puts in front of the old node
    //setting it to this.head points linkedlist class to new node
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      //while a node exists
      counter++;
      node = node.next; //takes us to next node or null if there is none
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      //if there is no head
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        //if there is no next node,its null, return last node
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null; //you just need to make head equal to null, other part of the node may be flying about
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next; //can't set this.head=node and do node= node.next?
  }

  removeLast() {
    if (!this.head) {
      //list is empty
      return;
    }

    if (!this.head.next) {
      //list has only 1 element
      this.head = null; //remove the head/last el
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      //while there is a next node
      previous = node; //move prev to where node was
      node = node.next; //move node to next node
    }
    previous.next = null; //if there is no next node, remove last node;
  }

  insertLast(data) {
    const last_node = this.getLast();

    if (last_node) {
      //there is a last node, not empty
      last_node.next = new Node(data); //new node() creates a new node
    } else {
      //chain empty
      this.head = new Node(data);
    }
  }
}

module.exports = { Node, LinkedList };
