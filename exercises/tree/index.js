// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data; //dont forget to make constructor param this.param =param;
    this.children = []; //everything in constructor has this
  }

  add(data) {
    //it can be used on the parent node or any other node
    const node = new Node(data);
    this.children.push(node); //push new node into parent
  }

  remove(data) {
    //filter makes a new arrunless you set it equal to old arr
    this.children = this.children.filter(node => {
      return node.data !== data; //return false means we want to remove element in filter, we are removing el in remove param
    });
  }
}

class Tree {
  constructor() {
    this.root = null; //head of tree
  }

  traverseBF(fn) {
    const array = [this.root];

    while (array.length) {
      //while length !=0
      const top = array.shift(); //shift removes the first element from an array and returns that removed element, it changes length of array

      array.push(...top.children); //you dont want to push an array into an array, as it will be a nested array
      //so we use spread element which takes elem from array and push into the array

      fn(top); //call fn with the current node we are looking at
    }
  }

  traverseDF(fn) {
    const array = [this.root];

    while (array.length) {
      const top = array.shift();

      array.unshift(...top.children); //unshift adds one or more elements to the beginning of an array and returns the new length of the array.

      fn(top);
    }
  }
}

module.exports = { Tree, Node };
